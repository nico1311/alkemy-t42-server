const express = require('express');
const Router = express.Router();
const { getAllActivities, editActivity, createActivity } = require('../controllers/ActivitiesController');
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('../middlewares/checkAdmin');

Router.get('/', getAllActivities);
Router.put('/:id', [verifyToken, checkAdmin] ,editActivity);
Router.post('/', [verifyToken, checkAdmin], createActivity);

module.exports = Router