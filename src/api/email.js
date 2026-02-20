/**
 * Email API - Dummy implementation
 * Replace with your email provider (e.g. Resend, SendGrid, SES, etc.)
 */

export const emailApi = {
  /**
   * Send an email
   * @param {Object} params - { to, subject, body }
   * @returns {Promise<void>}
   */
  async send({ to, subject, body }) {
    // TODO: Implement - call your email API or backend endpoint
    console.debug('[Email API] send:', { to, subject, bodyLength: body?.length });
    return Promise.resolve();
  },
};
