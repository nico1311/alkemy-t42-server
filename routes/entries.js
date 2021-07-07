const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const { getNews, getNewsDetail, putNew } = require('../controllers/EntriesController');

router.get('/', verifyToken, getNews);
router.get('/:id', verifyToken, getNewsDetail);
router.put('/:id', verifyToken, putNew);

module.exports = router;
