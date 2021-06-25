var express = require('express');
var router = express.Router();
var { body } = require('express-validator');

const {Login} = require('./../controllers/auth-controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Authentication*/
router.post('/auth/login', body('email').isEmail(), body('password').isLength({ min: 8 }), Login);


module.exports = router;
