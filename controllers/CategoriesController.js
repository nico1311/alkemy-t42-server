const { Category } = require('../models');
const log = require('../utils/logger');

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
  },

  /**
   * Get all categories
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllCategories(req, res) {
    try {
      const categories = await Category.findAll({
        attributes: ['id', 'name']
      });

      res.status(200).json({ categories });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  /**
   * Delete a category
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async deleteCategory (req, res) {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);

      if (!category) {
        log.warn(`Tried to delete non-existing category: [${id}]`);
        return res.status(404).json({ error: "Category not found" });
      }

      await category.destroy();

      log.info(`Category with id [${id}] deleted`);
      res.status(204).end();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
