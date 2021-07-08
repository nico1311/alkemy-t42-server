const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');
const { getNews, getNewsDetail, deleteNew } = require('../controllers/EntriesController');

router.get('/', verifyToken, getNews);
router.get('/:id', verifyToken, getNewsDetail);
router.delete('/:id', verifyToken, checkAdmin, deleteNew );


module.exports = router;
