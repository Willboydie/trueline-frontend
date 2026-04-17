// AWS Lambda: send-email
//
// Receives a contact-form JSON payload from API Gateway (HTTP API / proxy
// integration), validates it, formats an HTML email, and delivers it to the
// two configured recipients via the Resend transactional email API.
//
// Environment variables (set on the Lambda, never in source):
//   RESEND_API_KEY      Resend API key (re_XXXXXXXX...)
//   FROM_EMAIL          Verified sender, e.g. "TrueLine Lasers <noreply@truelinelasers.com>"
//   TO_EMAIL_PRIMARY    info@james-hutchison.com
//   TO_EMAIL_SECONDARY  williamteboyd@gmail.com
//   ALLOWED_ORIGIN      https://www.truelinelasers.com (for CORS)
//
// Runtime: Node.js 20+ (uses built-in global fetch). No node_modules required.

const RESEND_URL = 'https://api.resend.com/emails';

const ok = (body, origin) => ({
  statusCode: 200,
  headers: corsHeaders(origin),
  body: JSON.stringify(body),
});

const fail = (status, error, origin) => ({
  statusCode: status,
  headers: corsHeaders(origin),
  body: JSON.stringify({ success: false, error }),
});

function corsHeaders(origin) {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function escapeHtml(value) {
  if (value == null) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function renderEmailHtml({ name, company, email, role, project_description, inquiry_type }) {
  const row = (label, value) => `
    <tr>
      <td style="padding:8px 12px;font-weight:600;color:#111;white-space:nowrap;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#333;">${escapeHtml(value) || '<em style="color:#888;">(not provided)</em>'}</td>
    </tr>`;

  return `
  <!doctype html>
  <html>
    <body style="font-family:-apple-system,Segoe UI,Arial,sans-serif;background:#f5f5f7;margin:0;padding:24px;">
      <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eaeaea;">
        <tr>
          <td style="background:#111113;padding:20px 24px;">
            <h1 style="color:#fff;margin:0;font-size:18px;letter-spacing:0.5px;">
              <span style="color:#E53935;">TrueLine</span> Lasers &mdash; ${escapeHtml(inquiry_type || 'New Enquiry')}
            </h1>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <p style="margin:0 0 16px;color:#333;font-size:14px;">
              A new enquiry has just been submitted from the TrueLine Lasers website.
            </p>
            <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px;">
              ${row('Name', name)}
              ${row('Company', company)}
              ${row('Email', email)}
              ${row('Role', role)}
            </table>
            <h2 style="font-size:13px;color:#555;text-transform:uppercase;letter-spacing:1px;margin:24px 0 8px;">Project Description</h2>
            <div style="padding:12px 14px;background:#fafafa;border:1px solid #eee;border-radius:8px;color:#333;font-size:14px;line-height:1.5;white-space:pre-wrap;">
              ${escapeHtml(project_description) || '<em style="color:#888;">(not provided)</em>'}
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 24px;background:#fafafa;border-top:1px solid #eee;color:#888;font-size:12px;">
            Sent automatically by the TrueLine Lasers site. Reply directly to
            <a href="mailto:${escapeHtml(email)}" style="color:#E53935;text-decoration:none;">${escapeHtml(email)}</a>
            to respond to the lead.
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

function parseBody(event) {
  if (!event || event.body == null) return {};
  let raw = event.body;
  if (event.isBase64Encoded) {
    raw = Buffer.from(raw, 'base64').toString('utf8');
  }
  if (typeof raw === 'object') return raw;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export const handler = async (event) => {
  const origin = process.env.ALLOWED_ORIGIN || '*';
  const method = event?.requestContext?.http?.method || event?.httpMethod || 'POST';

  if (method === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(origin), body: '' };
  }
  if (method !== 'POST') {
    return fail(405, 'Method not allowed', origin);
  }

  const payload = parseBody(event);
  if (payload === null) return fail(400, 'Invalid JSON body', origin);

  const {
    name,
    company = '',
    email,
    role = '',
    project_description = '',
    inquiry_type = 'Demo Request',
  } = payload || {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    return fail(400, 'Name is required', origin);
  }
  if (!isValidEmail(email)) {
    return fail(400, 'A valid email address is required', origin);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL;
  const toPrimary = process.env.TO_EMAIL_PRIMARY;
  const toSecondary = process.env.TO_EMAIL_SECONDARY;

  if (!apiKey || !from || !toPrimary || !toSecondary) {
    console.error('Lambda misconfigured: missing env vars', {
      hasKey: !!apiKey,
      hasFrom: !!from,
      hasPrimary: !!toPrimary,
      hasSecondary: !!toSecondary,
    });
    return fail(500, 'Email service is not configured', origin);
  }

  const html = renderEmailHtml({ name, company, email, role, project_description, inquiry_type });
  const subject = `TrueLine Lasers - ${inquiry_type}: ${name}${company ? ` (${company})` : ''}`;

  try {
    const resp = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [toPrimary, toSecondary],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text().catch(() => '');
      console.error('Resend error', resp.status, detail);
      return fail(502, `Email provider error (${resp.status})`, origin);
    }

    const data = await resp.json().catch(() => ({}));
    return ok({ success: true, id: data?.id ?? null }, origin);
  } catch (err) {
    console.error('Unexpected error sending email', err);
    return fail(500, 'Unexpected error sending email', origin);
  }
};
