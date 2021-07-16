const express = require('express');
const router = express.Router();
const log = require('../utils/logger')
const verifyToken = require('../middlewares/verifyToken');
const publicDataController = require('../controllers/PublicDataController')

router.get('/', [verifyToken], publicDataController.getOrganization)
router.put('/', [verifyToken], publicDataController.editOrganization)

module.exports = router;
