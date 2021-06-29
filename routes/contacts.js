const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const {getContacts} = require('./../controllers/contacts');

router.get('/', [verifyToken, checkAdmin], getContacts);

module.exports = router;