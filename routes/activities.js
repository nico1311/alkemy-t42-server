const express = require('express');
const Router = express.Router();
const { getAllActivities, editActivity } = require('../controllers/ActivitiesController');
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');

Router.get('/', getAllActivities);
Router.put('/:id', editActivity);

module.exports = Router