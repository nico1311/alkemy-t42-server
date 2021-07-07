const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const { getNews, getNewsDetail, deleteNew } = require('../controllers/EntriesController');

router.get('/', verifyToken, getNews);
router.get('/:id', verifyToken, getNewsDetail);
router.delete('/:id', verifyToken,deleteNew );


module.exports = router;
