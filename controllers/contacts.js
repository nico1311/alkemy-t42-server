const { Contact } = require('./../models/index');

module.exports = {
  async getContacts(req, res) {
    const users = await Contact.findAll();

    try {
      res.status(200).json({ users: users });
    } catch {
      res.status(500).json('Error');
    }
  },
};
