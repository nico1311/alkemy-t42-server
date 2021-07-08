const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');
const { getNews, getNewsDetail, putNew, deleteNew } = require('../controllers/EntriesController');

router.get('/', verifyToken, getNews);
router.get('/:id', verifyToken, getNewsDetail);
router.put('/:id', verifyToken, checkAdmin, putNew);
router.delete('/:id', verifyToken, checkAdmin, deleteNew );


module.exports = router;
