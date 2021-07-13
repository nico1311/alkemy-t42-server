const { Activity } = require('../models');
const Joi = require('Joi');
const log = require('../utils/logger');

module.exports = {
  /**
   * Get all activities
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllActivities(req, res) {
    try {
      const activities = await Activity.findAll();
      log.info('Sending all the activities');
      res.status(200).json({ activities: activities });
    } catch (err) {
      log.error(
        `Error happened trying to send all the activities. Error: [${err.message}]`
      );
      res.status(500).json({ Error: err.message });
    }
  },
  /**
   * Get one acitivity
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getOneActivity(req, res) {
    try {
      const activity = await Activity.findOne({ where: { id: req.params.id } });
      if (activity === null) {
        log.error('Activity Not Found.');
        res.sendStatus(404);
      } else {
        log.info('Sending one activity');
        res.status(200).json({ Activity: activity });
      }
    } catch (err) {
      log.error(
        `Error happened trying to send the activity. Error: [${err.message}]`
      );
      res.status(500).json({ Error: err.message });
    }
  },
  /**
   * Delete one acitivity
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async deleteActivity(req, res) {
    try {
      const response = await Activity.destroy({ where: { id: req.params.id } });
      log.info('Deleting one activity');
      if (response == 1) res.sendStatus(204);
      else res.sendStatus(404);
    } catch (err) {
      log.error(
        `Error happened trying to delete the activity. Error: [${err.message}]`
      );
      res.status(500).json({ Error: err.message });
    }
  }
};
