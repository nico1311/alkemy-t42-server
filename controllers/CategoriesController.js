const { Category } = require('../models');
const Joi = require('joi');

module.exports = {
    /**
     * Create a new category
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    async createCategory(req, res) {
        const categorySchema = Joi.object({
            name: Joi.string().min(2).required(),
            description: Joi.string().min(10).max(2048).required()
        });

        try {
            const values = await categorySchema.validateAsync(req.body);
            const category = await Category.create(values);

        res.status(201).json(category);
        } catch (err) {
        if (err.details) {
            // body validation error
            res.status(422).json({ errors: err.details });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
    }
};
