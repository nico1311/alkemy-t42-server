const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const {
  getAllCategories,
  deleteCategory,
  updateCategory,
  createCategory
} = require('../controllers/CategoriesController');
const validateCategory = require('../validations/CategoriesValidation');

router.get('/', [verifyToken, checkAdmin], getAllCategories);
router.post('/', [verifyToken, checkAdmin, validateCategory], createCategory);
router.put('/:id', [verifyToken, checkAdmin, validateCategory], updateCategory);
router.delete('/:id', [verifyToken, checkAdmin], deleteCategory);

module.exports = router;
