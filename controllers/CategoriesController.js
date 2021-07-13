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
        return ({
          id: category.id,
          name: category.name          
        });
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
