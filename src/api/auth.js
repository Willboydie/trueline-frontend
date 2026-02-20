/**
 * Auth API - Dummy implementation
 * Replace with your auth provider (e.g. Auth0, Supabase Auth, Firebase, etc.)
 */

export const authApi = {
  /**
   * Get current authenticated user
   * @returns {Promise<Object|null>} Resolves to user object or null if not authenticated
   */
  async me() {
    // TODO: Implement - validate token, fetch user from your backend
    console.debug('[Auth API] me()');
    return Promise.reject(new Error('Not authenticated')); // No user in dummy mode
  },

  /**
   * Log out the current user
   * @param {string} [redirectUrl] - Optional URL to redirect after logout
   */
  logout(redirectUrl) {
    // TODO: Implement - clear tokens, invalidate session, optionally redirect
    console.debug('[Auth API] logout:', redirectUrl ?? '(no redirect)');
  },

  /**
   * Redirect to login page
   * @param {string} returnUrl - URL to return to after successful login
   */
  redirectToLogin(returnUrl) {
    // TODO: Implement - redirect to your login page with return URL
    console.debug('[Auth API] redirectToLogin:', returnUrl);
  },
};
