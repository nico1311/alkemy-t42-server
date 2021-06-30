const { Contact } = require('../models');

module.exports = {
  /**
   * Get all contacts
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllContacts(req, res) {
    const users = await Contact.findAll();

    try {
      res.status(200).json({ users: users });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
