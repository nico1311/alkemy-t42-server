const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const {
  getAllCategories
} = require('../controllers/CategoriesController');

router.get('/', [verifyToken, checkAdmin], getAllCategories);

module.exports = router;
