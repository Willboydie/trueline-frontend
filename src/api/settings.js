/**
 * App Settings API - Dummy implementation
 * Replace with your config source (env vars, custom API, etc.)
 */

export const settingsApi = {
  /**
   * Fetch app public settings (auth required, user registration status, etc.)
   * @returns {Promise<Object>} Public settings object
   */
  async getPublicSettings() {
    // TODO: Implement - fetch from your backend or return static config
    console.debug('[Settings API] getPublicSettings()');
    return Promise.resolve({
      // Default: public app, no auth required
      auth_required: false,
    });
  },
};
