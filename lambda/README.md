# TrueLine `send-email` Lambda

Serverless function that receives TrueLine Lasers contact-form submissions
from API Gateway and delivers them via [Resend](https://resend.com).

Zero npm dependencies — uses the Node.js 20+ built-in `fetch`.

- `index.mjs` — the Lambda handler
- `package.json` — declares ESM + Node 20 runtime

---

## One-time setup

### 1. Resend

1. Create an account at <https://resend.com>.
2. **Add domain** → `truelinelasers.com`. Copy the DNS records Resend shows
   you (SPF `TXT`, DKIM `CNAME`s, usually a DMARC `TXT`) and add them to the
   DNS zone for `truelinelasers.com`. Wait for Resend to mark the domain
   **Verified** (usually minutes, up to 24 h).
3. **API Keys** → Create API Key → scope it to **Sending access** only.
   Copy the key (starts with `re_...`). You'll paste it into Lambda in step 3.

### 2. AWS Lambda

Either use the console or the AWS CLI. Pick a region and keep it consistent
with API Gateway in the next step.

**Console route:**

1. Lambda → Create function → Author from scratch.
   - Name: `trueline-send-email`
   - Runtime: **Node.js 20.x** (or 22.x)
   - Architecture: `arm64` (cheaper) or `x86_64` — either is fine.
2. After it's created, go to **Code** → paste the contents of `index.mjs`
   into the editor (replacing the default `index.mjs` / rename if needed so
   the file is called `index.mjs`). Click **Deploy**.
3. **Configuration → General configuration → Edit** → set Timeout to **10 s**
   and Memory to **256 MB**.
4. **Configuration → Environment variables → Edit → Add environment variable**:

   | Key                  | Value                                                     |
   | -------------------- | --------------------------------------------------------- |
   | `RESEND_API_KEY`     | `re_...` (from step 1)                                    |
   | `FROM_EMAIL`         | `TrueLine Lasers <noreply@truelinelasers.com>`            |
   | `TO_EMAIL_PRIMARY`   | `info@james-hutchison.com`                                |
   | `TO_EMAIL_SECONDARY` | `williamteboyd@gmail.com`                                 |
   | `ALLOWED_ORIGIN`     | `https://www.truelinelasers.com`                          |

   Save.

**CLI route** (after zipping this folder):

```bash
cd lambda
zip -r ../send-email.zip .
aws lambda create-function \
  --function-name trueline-send-email \
  --runtime nodejs20.x \
  --role arn:aws:iam::<acct-id>:role/<your-basic-lambda-role> \
  --handler index.handler \
  --zip-file fileb://../send-email.zip \
  --timeout 10 --memory-size 256 \
  --environment "Variables={RESEND_API_KEY=re_xxx,FROM_EMAIL='TrueLine Lasers <noreply@truelinelasers.com>',TO_EMAIL_PRIMARY=info@james-hutchison.com,TO_EMAIL_SECONDARY=williamteboyd@gmail.com,ALLOWED_ORIGIN=https://www.truelinelasers.com}"
```

The execution role needs only the AWS-managed `AWSLambdaBasicExecutionRole`
policy (CloudWatch Logs). No VPC, no secrets manager, no other AWS services.

### 3. API Gateway (HTTP API)

1. API Gateway → **Create API** → **HTTP API** → Build.
2. **Integrations** → Add integration → Lambda → pick `trueline-send-email`.
3. **Routes** → `POST /send-email` → attach the Lambda integration.
   Also add `OPTIONS /send-email` → same integration (so the handler's
   own CORS preflight logic is exercised). _Alternatively_ rely on
   API Gateway's built-in CORS (see next step) — either works.
4. **CORS**:

   - Access-Control-Allow-Origin: `https://www.truelinelasers.com`
     (add your CloudFront URL too while you're still testing)
   - Access-Control-Allow-Methods: `POST, OPTIONS`
   - Access-Control-Allow-Headers: `content-type`
   - Access-Control-Max-Age: `86400`

5. **Stages** → use the auto-deploy `$default` stage. Copy the **Invoke URL**
   displayed on the API's overview page — it looks like

   ```
   https://abc123def.execute-api.eu-west-2.amazonaws.com
   ```

   Your full endpoint is that URL plus `/send-email`, i.e.

   ```
   https://abc123def.execute-api.eu-west-2.amazonaws.com/send-email
   ```

### 4. Frontend

Set the endpoint in the frontend build environment (e.g. `.env.local`
for local dev, and in whatever CI/CD you use to build+deploy to S3):

```
VITE_CONTACT_API_URL=https://abc123def.execute-api.eu-west-2.amazonaws.com/send-email
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

Then `npm run build` and upload `dist/` to S3 as you do today.

---

## Smoke testing

From your dev machine:

```bash
curl -X POST https://<your-api>.execute-api.<region>.amazonaws.com/send-email \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Test Submission",
    "company": "TrueLine Internal",
    "email": "you@example.com",
    "role": "QA",
    "project_description": "Testing the pipeline."
  }'
```

Expected response: `{"success":true,"id":"..."}`. Both recipients should
receive the HTML email within seconds. Check Resend's dashboard if nothing
arrives — it will show the delivery status, any bounces, and failures.

To confirm CORS from the browser, from <https://www.truelinelasers.com>:

```js
await fetch('https://<your-api>.../send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'CORS check', email: 'you@example.com' }),
}).then(r => r.json());
```

---

## Updating the function later

Edit `index.mjs`, then either paste the new contents into the Lambda console
and click **Deploy**, or:

```bash
cd lambda
zip -r ../send-email.zip .
aws lambda update-function-code \
  --function-name trueline-send-email \
  --zip-file fileb://../send-email.zip
```

---

## What the function does (summary)

1. Reads JSON from API Gateway (supports both the HTTP API v2 shape and the
   older REST shape via `event.body` / `event.isBase64Encoded`).
2. Validates: `name` non-empty, `email` is syntactically valid. All other
   fields optional.
3. Escapes all user input, renders a branded HTML email.
4. Calls `POST https://api.resend.com/emails` with the Resend API key.
   `reply_to` is set to the submitter so you can reply directly from your
   inbox.
5. Returns `200 {success:true,id}` on success, `4xx` on validation errors,
   `5xx` on provider/config errors. Every response includes the CORS
   headers permitted by `ALLOWED_ORIGIN`.
