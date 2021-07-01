const express = require('express');
const router = express.Router();
const entriesRouter = require('./entries')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/', entriesRouter)

module.exports = router;
