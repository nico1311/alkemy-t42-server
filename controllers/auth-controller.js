const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = {
  /**
   * Log in a user with email and password
   * @param {import('express').Request} req
   * @param {import('express').Rsponse} res
   * @returns {Promise<void>}
   */
  async login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      res.status(404).json({ ok: false });
    } else {
      const passwordsMatch = await bcrypt.compare(password, user.password);
      if (passwordsMatch) {
        // copy of user.dataValues without password property
        const { password, ...sentValues } = user.dataValues;

        res.status(200).json({ user: sentValues });
      } else {
        res.status(401).json({ ok: false });
      }
    }
  },

  /**
   * Register a new user account
   * @param {import('express').Request} req
   * @param {import('express').Rsponse} res
   * @returns {Promise<void>}
   */
  async register(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      const existingUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (existingUser)
        return res.status(400).json({
          error: 'Email already registered',
        });

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
      });

      // copy of user.dataValues without password property
      const { password, ...sentValues } = user.dataValues;

      res.status(201).json({ user: sentValues });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  },
};
