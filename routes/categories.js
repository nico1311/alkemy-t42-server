const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const {
  getAllCategories,
  deleteCategory
} = require('../controllers/CategoriesController');

router.get('/', [verifyToken, checkAdmin], getAllCategories);
router.delete('/:id', [verifyToken, checkAdmin], deleteCategory);

module.exports = router;
