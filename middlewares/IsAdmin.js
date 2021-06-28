const { User } = require('../models/index');

const IsAdmin = async (req, res, next) => {
  const userFound = await User.findOne({ attributes: ['roleId'] });
  if (userFound.dataValues.roleId === 1) {
    next();
  } else res.status(401).json({ message: 'El usuario no posee acceso' });
};

module.exports = { IsAdmin };
