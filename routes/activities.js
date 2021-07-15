const express = require('express');
const Router = express.Router();
const {
  getAllActivities,
  editActivity,
  getOneActivity,
  deleteActivity
} = require('../controllers/ActivitiesController');
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');

Router.get('/', getAllActivities);
Router.get('/:id', getOneActivity);
Router.put('/:id', [verifyToken, checkAdmin], editActivity);
Router.delete('/:id', [verifyToken, checkAdmin], deleteActivity);

module.exports = Router;
