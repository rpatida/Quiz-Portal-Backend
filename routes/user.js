const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUser,
  checkUserName,
  loginUser,
} = require("../controllers/userController");

const { isAuthunticatedUser } = require("../middlewares/auth");

router.route("/getAllUser").get(isAuthunticatedUser, getAllUser);

router.route("/createUser").post(createUser);

router.route("/checkUserName").post(checkUserName);

router.route("/loginUser").post(loginUser);

module.exports = router;
