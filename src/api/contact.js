/**
 * Contact API - Submits contact-form inquiries via the email backend
 * (API Gateway -> Lambda -> Resend). The Lambda is responsible for
 * formatting and delivering the email to the configured recipients.
 */
import { emailApi } from './email';

export const contactApi = {
  /**
   * Create a contact inquiry.
   * @param {Object} data - { name, company, email, role, project_description }
   * @returns {Promise<void>}
   */
  async create(data) {
    await emailApi.send(data);
  },
};
