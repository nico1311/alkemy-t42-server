const { activity } = require('../models')
const Joi = require('joi')
const log = require('../utils/logger')

module.exports = {

    /**
     * Get all activities
     * @param {import('express').Request} req 
     * @param {import('express').Response} res
     * @returns {Promise<void>} 
     */
    async getAllActivities(req, res) {
        try {
            const activities = await activity.findAll()
            log.info('Seending all the activities')
            res.status(200).json({activities: activities})
        } catch (err) {
            log.err(`Error happened trying to send all the activities. Error: [${err.message}]`)
            res.status(500).json({Error: err.message})
        }
    }
}