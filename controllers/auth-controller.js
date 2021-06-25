const { User } = require("./../models/index");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

module.exports = {
  async Login(req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    const passwordID = bcrypt.hashSync(user.password, 10);

    if (!user) {
        res.status(404).json({ ok: false });
    } else {
      if (bcrypt.compareSync(password, passwordID)) {
        res.status(200).json({ user: user });
      } else {
        res.status(400).json({ ok: false });
      }
    }
  },
};
