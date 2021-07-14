const express = require('express');
const router = express.Router();
const { createTestimonial, putTestimonial } = require('../controllers/TestimonialsController');
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');
const { validateCreate } = require('./../middlewares/testimonials');

router.post('/', validateCreate, createTestimonial);
router.put('/:id', [verifyToken, checkAdmin], putTestimonial);

module.exports = router;
