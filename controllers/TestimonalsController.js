const { Testimonials } = require('../models');

module.exports = {
  /**
   * Create a testimonial
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async createTestimonial (req, res) {
    try {
      const response = await Testimonials.create(req.body);
      res.json(response);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
