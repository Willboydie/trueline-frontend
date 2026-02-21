# TrueLine Lasers Frontend

## Prerequisites

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Optionally create `.env.local` for environment variables:

```
VITE_API_URL=https://your-api-url.com
```

## Run the app

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Implementing backends

The app uses dummy implementations for contact forms, auth, analytics, and email. Replace them in:

- `src/api/contact.js` - Contact form submissions (e.g. Formspree, custom API)
- `src/api/auth.js` - Authentication (e.g. Auth0, Supabase Auth)
- `src/api/analytics.js` - Page view tracking (e.g. Google Analytics, Plausible)
- `src/api/email.js` - Send email (e.g. Resend, SendGrid)
- `src/api/settings.js` - App public settings
