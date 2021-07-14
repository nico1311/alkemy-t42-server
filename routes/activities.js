const express = require('express');
const Router = express.Router();
const { getAllActivities } = require('../controllers/ActivitiesController');

Router.get('/', getAllActivities);

module.exports = Router