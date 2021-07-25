const express = require('express');
const router = express.Router();
const { createTestimonial, putTestimonial, getTestimonials, getTestimony } = require('../controllers/TestimonialsController');
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');
const { validateCreate } = require('./../middlewares/testimonials');

router.get('/', verifyToken, getTestimonials);
router.get('/:id', verifyToken, getTestimony);
router.post('/', validateCreate, createTestimonial);
router.put('/:id', [verifyToken, checkAdmin], putTestimonial);

module.exports = router;
