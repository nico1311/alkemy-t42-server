var express = require('express');
var router = express.Router();
var verifyToken = require('../middlewares/verifyToken');
var checkAdmin = require('./../middlewares/checkAdmin');
var {getContacts} = require('./../controllers/contacts');

router.get('/', [verifyToken, checkAdmin], getContacts);

module.exports = router;