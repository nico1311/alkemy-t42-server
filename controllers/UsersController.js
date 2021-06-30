const { User } = require('../models');

module.exports = {
  /**
   * Get all users
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllUsers (req, res) {
    try {
      const results = await User.findAll();
      const users = results.map((user) => {
        const { password, ...filteredValues } = user.dataValues;
        return filteredValues;
      });
      res.json({ users });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
