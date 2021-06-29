const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //get to endpoint "/organizations/1/public"
  try {
    //Json public data
    const publicData = {
      name: "Somos Más",
      image:
        "https://cdn-sp.radionacional.com.ar/wp-content/uploads/2017/04/ONG.png", //example url logo
      phone: "1160112988",
      address: "Address 1234, 0000 example",
      welcomeText: "Welcome text example",
      //Social links is object with social links in the footer.
      //Key = Name of social network
      //Value = Profile Link
      socialLinks: {
        Instagram: "https://www.instagram.com/SomosMás",
        Facebook: "https://www.facebook.com/Somos_Más",
      },
    };
    res.status(200).json(publicData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
