const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
const config = require(__dirname + "/../config/config").development;

const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ Error: "No token provided" });

  try {
    const jwtDecode = jwt.verify(token, config.secret);
    req.decodedID = jwtDecode.id;

    const user = await User.findOne({ where: { id: req.decodedID } });

    if (!user) return res.status(404).json({ Error: "User not found" });

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Unauthorized" });
  }
};

module.exports = verifyToken;
