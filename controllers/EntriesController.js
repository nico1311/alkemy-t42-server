const { Entry } = require('../models');

module.exports = {
  /**
   *@module controllers
   */
  /**
   * Get all the entries with type 'news'
   * @param {import('express').Request} req
   * @param {import('express').Request} res
   * @returns {Promise<void>}
   */
  async getNews(req, res) {
    try {
      const news = await Entry.findAll({
        where: { type: 'news' },
        attributes: {
          exclude: ['content', 'categoryId', 'type', 'deletedAt']
        }
      });
      res.json({ news });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
