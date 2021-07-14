const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const {createCategory} = require('../controllers/CategoriesController');

router.post('/', [verifyToken, checkAdmin], createCategory); //Must be admin to create a category.

module.exports = router;

