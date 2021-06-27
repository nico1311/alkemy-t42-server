const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const publicData = {
      name: "ONG name example",
      image:
        "https://cdn-sp.radionacional.com.ar/wp-content/uploads/2017/04/ONG.png", //example logo
      phone: "1234567890",
      address: "Adress 1234, CT 0000 example",
      welcomeText: "Welcome text example",
      socialLinks: {
        instagram: "https://www.instagram.com",
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
      },
    };
    res.status(200).json(publicData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
