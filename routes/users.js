const express = require('express');
const router = express.Router();
const {allUser} = require('../controllers/users')
const {IsAdmin} = require('../middlewares/IsAdmin')



/* GET users listing. */
router.get('/', IsAdmin, allUser);

module.exports = router;

module.exports = router;
