/**
 * Email API - Posts contact-form submissions to the AWS API Gateway endpoint
 * which fronts the send-email Lambda. The Lambda formats an HTML email and
 * delivers it via Resend.
 *
 * Endpoint is configured via VITE_CONTACT_API_URL at build time, e.g.:
 *   https://abc123.execute-api.eu-west-2.amazonaws.com/send-email
 */

const ENDPOINT = import.meta.env.VITE_CONTACT_API_URL;

export const emailApi = {
  /**
   * Send the contact-form payload to the backend.
   * @param {Object} payload - { name, company, email, role, project_description }
   * @returns {Promise<void>} Resolves on 2xx; rejects on network error or non-2xx.
   */
  async send(payload) {
    if (!ENDPOINT) {
      throw new Error(
        'VITE_CONTACT_API_URL is not configured. Set it in your .env file before building.'
      );
    }

    let response;
    try {
      response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (networkError) {
      throw new Error(`Network error contacting email service: ${networkError.message}`);
    }

    if (!response.ok) {
      let detail = '';
      try {
        const body = await response.json();
        detail = body?.error || body?.message || JSON.stringify(body);
      } catch {
        detail = await response.text().catch(() => '');
      }
      throw new Error(
        `Email service returned ${response.status}${detail ? `: ${detail}` : ''}`
      );
    }
  },
};
