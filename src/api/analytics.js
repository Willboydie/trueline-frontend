/**
 * Analytics API - Dummy implementation
 * Replace with your analytics provider (e.g. Google Analytics, Plausible, PostHog, etc.)
 */

export const analyticsApi = {
  /**
   * Log user page view / in-app navigation
   * @param {string} pageName - Name of the page being viewed
   * @returns {Promise<void>}
   */
  async logUserInApp(pageName) {
    // TODO: Implement - e.g. gtag('event', 'page_view', { page: pageName })
    console.debug('[Analytics API] logUserInApp:', pageName);
    return Promise.resolve();
  },
};
