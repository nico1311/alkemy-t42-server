const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const existingUser = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (existingUser) return res.status(400).json({
      error: 'Email already registered'
    });
  
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: hashedPassword
    });
  
    // copy of user.dataValues without password property
    const { password, ...sentValues } = user.dataValues;
  
    res.status(201).json(sentValues);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}

module.exports = {
  register
};
