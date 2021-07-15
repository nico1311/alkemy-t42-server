const express = require('express');
const Router = express.Router();
const { getAllActivities, editActivity } = require('../controllers/ActivitiesController');
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');

Router.get('/', getAllActivities);
Router.put('/:id', [verifyToken, checkAdmin] ,editActivity);

module.exports = Router