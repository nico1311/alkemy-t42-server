const { activity } = require('../models');
const Joi = require('joi');
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
      const activities = await activity.findAll();
      log.info('Seending all the activities');
      res.status(200).json({ activities: activities });
    } catch (err) {
      log.err(
        `Error happened trying to send all the activities. Error: [${err.message}]`
      );
      res.status(500).json({ Error: err.message });
    }
  },

  /**
   * Edit specific activity by id
   * @param {import('express').Request} req
   * @param {import('express'.Response)} res
   * @returns {Promise<void>}
   */
  async editActivity(req, res) {
    const id = req.params.id;
    log.info(`Editing activity with id [${id}]`);
    try {
      const specificActivity = await activity.findByPk(id);

      if (specificActivity === null) {
        log.warn(`Activity with id [${id}] does not exist`);
        res.status(404).end();
      }

      log.info(`Activity with id [${id}] was edited`);
      await specificActivity.update(req.body);
      res.status(200).json(specificActivity);
    } catch (err) {
      log.error(
        `Error happened trying to edit activity with id [${id}]. Error: [${err.message}] `
      );
      res.status(500).json({ Error: err.message });
    }
  },
  /**
   * Create a new Activity
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async createActivity(req, res) {
    const activitySchemas = Joi.object().keys({
      name: Joi.string().min(4).max(30).required().messages({
        'string.min': 'The name must be at least 4 characters long',
        'string.max': 'The name cannot be longer than 20 characters'
      }),
      content: Joi.string().min(15).max(1000).required().messages({
        'string.min': 'The content must be at least 15 characters long',
        'string.max': 'The content cannot be longer than 1000 characters'
      }),
      image: Joi.string().optional()
    });
    log.info('Create new activity');
    try {
      const value = await activitySchemas.validateAsync(req.body);
      const Activity = await activity.create(value);
      res.status(201).json(Activity);
      log.info('Activity created');
    } catch (error) {
      if (error.details) {
        log.warn(
          `There was validation errors in activity. Errors: [${error.details[0].message}]`
        );
        res.status(422).json({ message: error.details[0].message });
      } else {
        log.error(
          `Error happened trying to create a activity. Error; [${error.details[0].message}]`
        );
        res.status(500).json({ message: error.details[0].message });
      }
    }
  }
};
