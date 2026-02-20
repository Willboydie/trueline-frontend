/**
 * App API Client - Composes contact, auth, analytics, and email services.
 * Uses dummy implementations by default; replace imports in each api/*.js with your real backends.
 */
import { contactApi } from './contact';
import { authApi } from './auth';
import { analyticsApi } from './analytics';
import { emailApi } from './email';

export const appClient = {
  auth: authApi,
  entities: {
    ContactInquiry: contactApi,
  },
  integrations: {
    Core: {
      SendEmail: (params) => emailApi.send(params),
    },
  },
  appLogs: analyticsApi,
};
