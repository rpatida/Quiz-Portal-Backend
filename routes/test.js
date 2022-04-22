const express = require("express");
const router = express.Router();
const { getTestData } = require("../controllers/test");

router.route("/getTest").get(getTestData);

module.exports = router;
