const { Category } = require('../models');

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
  }
};
