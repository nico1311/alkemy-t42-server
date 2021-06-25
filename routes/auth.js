const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const AuthController = require('../controllers/auth-controller');

router.post('/login',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
AuthController.login);

router.post('/register',
  body('first_name').isLength({ min: 1 }),
  body('last_name').isLength({ min: 1 }),
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
AuthController.register);

module.exports = router;
