/**
 * API client - exports appClient for backward compatibility.
 * Previously used @base44/sdk; now uses local dummy implementations.
 * See src/api/contact.js, auth.js, analytics.js, email.js to implement your backends.
 */
import { appClient } from './appClient';

export const base44 = appClient;
