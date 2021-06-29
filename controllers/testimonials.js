const { Testimonials } = require('../models/index');

const PostTestimonials = async (req, res) => {
  try {
    const response = await Testimonials.create(req.body);
    res.json(response);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { PostTestimonials };
