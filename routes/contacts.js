const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const {
  createContact,
  getAllContacts
} = require('../controllers/ContactsController');

router.post('/', createContact);
router.get('/', [verifyToken, checkAdmin], getAllContacts);

module.exports = router;
