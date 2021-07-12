const express = require('express');
const router = express.Router();
const { createTestimonial } = require('../controllers/TestimonialsController');
const { validateCreate } = require('./../middlewares/testimonials');

router.post('/', validateCreate, createTestimonial);

module.exports = router;
