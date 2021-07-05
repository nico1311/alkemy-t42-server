const { Contact } = require('../models');

module.exports = {
  /**
   * Get all contacts
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllContacts(req, res) {
    const contacts = await Contact.findAll();

    try {
      res.status(200).json({ contacts: contacts });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
