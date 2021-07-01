const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');
const { getNews } = require('../controllers/EntriesController');

router.get('/news', [verifyToken, checkAdmin], getNews);

module.exports = router;
