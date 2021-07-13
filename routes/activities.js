const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const {
  getAllActivities,
  getOneActivity,
  deleteActivity
} = require('../controllers/ActivitiesController');

router.get('/:id', getOneActivity);
router.get('/', getAllActivities);
router.delete('/:id', [verifyToken, checkAdmin], deleteActivity);

module.exports = router;
