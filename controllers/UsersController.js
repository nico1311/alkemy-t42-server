const { User } = require('../models');

module.exports = {
  /**
   * Get all users
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: ['password']
        }
      });
      res.json({ users });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
