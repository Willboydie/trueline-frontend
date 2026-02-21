# TrueLine Lasers Frontend

## Prerequisites

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. For testing locally, create `.env.local` for environment variables:

```
VITE_API_URL=http://localhost:3001
```

## Build

```bash
npm run build
```

## Preview (see in browser)

```bash
npm run preview
```

## Implementing backends

The app uses dummy implementations for contact forms, auth, analytics, and email. Replace them in:

- `src/api/contact.js` - Contact form submissions (e.g. Formspree, custom API)
- `src/api/auth.js` - Authentication (e.g. Auth0, Supabase Auth)
- `src/api/analytics.js` - Page view tracking (e.g. Google Analytics, Plausible)
- `src/api/email.js` - Send email (e.g. Resend, SendGrid)
- `src/api/settings.js` - App public settings
