const express = require("express");
const router = express.Router();
const { homePage, aboutPage } = require("../Controllers/products");

router.route("/").get(homePage);
router.route("/about").get(aboutPage);

module.exports = router;
