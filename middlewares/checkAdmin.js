const { User } = require('../models/index');

const checkAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.decodedID } });

    if (user.roleId === 1) {
      next();
    } else {
      return res.status(403).json({ Error: 'Admin role required' });
    }
  } catch {
    return res.status(500).send('Error');
  }
};

module.exports = checkAdmin;
