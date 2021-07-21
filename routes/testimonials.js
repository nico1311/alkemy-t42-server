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
const validateTestimonial = require('../validations/TetimonialValidation');

router.get('/', verifyToken, getTestimonials);
router.post('/', [verifyToken, checkAdmin, validateTestimonial], createTestimonial);
router.put('/:id', [verifyToken, checkAdmin, validateTestimonial], putTestimonial);
router.delete('/:id', [verifyToken, checkAdmin], deleteTestimonial);

module.exports = router;
