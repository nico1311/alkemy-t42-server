const express = require('express');
const router = express.Router();
const {
  getAllActivities,
  editActivity,
  getOneActivity,
  deleteActivity
} = require('../controllers/ActivitiesController');
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', getAllActivities);
router.get('/:id', getOneActivity);
router.put('/:id', [verifyToken, checkAdmin], editActivity);
router.delete('/:id', [verifyToken, checkAdmin], deleteActivity);

module.exports = router;
