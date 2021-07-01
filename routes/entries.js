const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const { getNews, getNewsDetail } = require('../controllers/EntriesController');

router.get('/', verifyToken, getNews);
router.get('/:id', verifyToken, getNewsDetail);

module.exports = router;
