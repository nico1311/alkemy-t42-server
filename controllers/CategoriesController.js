const { Category } = require('../models');
const log = require('../utils/logger');

module.exports = {
  /**
   * Get all categories
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllCategories(req, res) {
    try {
      const categoriesQuery = await Category.findAll();
      const categories = categoriesQuery.map((category) => {
        return {
          id: category.id,
          name: category.name
        };
      });
      res.status(200).json({ categories });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
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
   * Update a category
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async updateCategory(req, res) {
    log.info('Try updating an category');
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        log.warn(`Tried to update non-existing category: [${id}]`);
        return res.status(404).json({ error: 'Category not found' });
      }
      const update = await Category.update(req.body, {
        where: { id }
      });
      if (update) {
        log.info(`Category with id [${id}] updated`);
        res.status(202).end();
      }
      res.status(406).end();
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
  async deleteCategory(req, res) {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        log.warn(`Tried to delete non-existing category: [${id}]`);
        return res.status(404).json({ error: 'Category not found' });
      }
      await category.destroy();
      log.info(`Category with id [${id}] deleted`);
      res.status(204).end();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
