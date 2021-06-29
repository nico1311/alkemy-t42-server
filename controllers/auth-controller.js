const { User } = require("./../models/index");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

module.exports = {
  /** The function receives an user and a password from req.body. If user is valid, returns a json with the user. Otherwise,
   * returns {ok: false}
   * 
   * Uses bcrypt to compare password provided by user with the crypted password in database.
   * 
   * @function Login
   * @param  {} req Should receive an email and a password
   * @param  {} res
   */
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
