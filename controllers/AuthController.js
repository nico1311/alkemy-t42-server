const Joi = require('joi');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const TokenService = require('../services/TokenService');

module.exports = {
  /**
   * Log in a user with email and password
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async login(req, res) {
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
    });

    try {
      const values = await loginSchema.validateAsync(req.body);
      const { email, password } = values;

      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        res.status(404).json({ ok: false });
      } else {
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) {
          // copy of user.dataValues without password property
          const { password, ...sentValues } = user.dataValues;

          const token = TokenService.createToken({
            userId: user.id
          });

          res.status(200).json({
            token,
            user: sentValues
          });
        } else {
          res.status(401).json({ ok: false });
        }
      }
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
   * Register a new user account
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async register(req, res) {
    const registrationSchema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
    });

    try {
      const values = await registrationSchema.validateAsync(req.body);

      const existingUser = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      if (existingUser) {
        return res.status(400).json({
          error: 'Email already registered'
        });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
        roleId: 2
      });

      // copy of user.dataValues without password property
      const { password, ...sentValues } = user.dataValues;

      res.status(201).json({ user: sentValues });
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
   * Get details about the currently logged in user
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getCurrentUserInfo(req, res) {
    const { user } = req;
    const { password, ...sentValues } = user.dataValues; // exclude password
    res.status(200).json(sentValues);
  }
};
