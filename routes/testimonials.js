const express = require('express');
const router = express.Router();
const {PostTestimonials} = require('./../controllers/testimonials')
const {validateCreate} = require('./../middlewares/testimonials')


router.post('/', validateCreate , PostTestimonials)

module.exports = router