const express = require('express');
const router = express.Router();
const { createTestimonial, putTestimonial, getTestimonials } = require('../controllers/TestimonialsController');
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');
const validateTestimonial = require('../validations/TetimonialValidation');

router.get('/', verifyToken, getTestimonials);
router.post('/', validateTestimonial, createTestimonial);
router.put('/:id', [verifyToken, checkAdmin, validateTestimonial], putTestimonial);

module.exports = router;
