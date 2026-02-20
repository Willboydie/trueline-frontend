/**
 * Contact API - Dummy implementation
 * Replace with your backend (e.g. Formspree, custom API, etc.)
 */

export const contactApi = {
  /**
   * Create a contact inquiry
   * @param {Object} data - { name, company, email, role, project_description }
   * @returns {Promise<void>}
   */
  async create(data) {
    // TODO: Implement - e.g. POST to your API, Formspree, etc.
    console.debug('[Contact API] create:', data);
    return Promise.resolve();
  },
};
