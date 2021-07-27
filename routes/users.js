const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const { getAllUsers, deleteUser, getUser } = require('../controllers/UsersController');

/* GET users listing. */
router.get('/', [verifyToken, checkAdmin], getAllUsers);
router.get('/:id', [verifyToken, checkAdmin], getUser);
router.delete('/:id', deleteUser)

module.exports = router;

//Poner arriba.