const express = require('express');
const router = express.Router();
const {
  getTestimonials,
  createTestimonial,
  putTestimonial,
  deleteTestimonial
} = require('../controllers/TestimonialsController');
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');
const { validateCreate } = require('./../middlewares/testimonials');

router.get('/', verifyToken, getTestimonials);
router.post('/', validateCreate, createTestimonial);
router.put('/:id', [verifyToken, checkAdmin], putTestimonial);
router.delete('/:id', [verifyToken, checkAdmin], deleteTestimonial);

module.exports = router;
