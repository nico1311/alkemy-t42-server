const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const { getAllContacts } = require('../controllers/ContactsController');

router.get('/', [verifyToken, checkAdmin], getAllContacts);

module.exports = router;
