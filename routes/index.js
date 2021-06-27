var express = require('express');
var router = express.Router();
var userRoutes = require("./users")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/user", userRoutes)

module.exports = router;
