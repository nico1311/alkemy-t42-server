const { Testimonials } = require('../models');
const log = require('../utils/logger')

module.exports = {
  /**
   * Create a testimonial
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async createTestimonial(req, res) {
    try {
      const response = await Testimonials.create(req.body);
      log.info('Testimonial created');
      res.json(response);
    } catch (err) {
      log.error(`There was an error creating a testimonial. Error [${err.message}]`)
      res.status(500).json({ error: err.message });
    }
  }
};
