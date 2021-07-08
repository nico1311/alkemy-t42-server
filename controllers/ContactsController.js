const { Contact } = require('../models');
const Joi = require('joi');

module.exports = {
  /**
   * Create a new contact
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async createContact(req, res) {
    const contactSchema = Joi.object({
      name: Joi.string().min(2).required(),
      email: Joi.string().email().required(),
      message: Joi.string().min(10).max(2048).required()
    });

    try {
      const values = await contactSchema.validateAsync(req.body);
      const contact = await Contact.create(values);

      res.status(201).json(contact);
    } catch (err) {
      if (err.details) {
        // body validation error
        res.status(422).json({ errors: err.details });
      } else {
        res.status(500).json({ error: err.message });
      }
    }
  },
  /**
   * Get all contacts
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllContacts(req, res) {
    try {
      const contacts = await Contact.findAll();

      res.status(200).json({ contacts: contacts });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
