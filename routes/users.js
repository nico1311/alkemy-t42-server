const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const { getAllUsers } = require('../controllers/UsersController');

/* GET users listing. */
router.get('/', [verifyToken, checkAdmin], getAllUsers);

module.exports = router;
