const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

//setting up config file
dotenv.config({ path: "config/config.env" });

//create user

exports.createUser = catchAsyncErrors(async (req, res, next) => {
  const { name, username, password, phoneno } = req.body;

  const user = await User.create({
    name,
    username,
    password,
    phoneno,
  });

  let paylod = { subject: user._id };
  let token = jwt.sign(paylod, process.env.SECRET_KET_TOKEN);

  res.status(200).send({ token });
});

//check username
exports.checkUserName = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    return next(new ErrorHandler("Username not found", 400));
  }

  res.status(200).json({
    success: true,
    message: "User already exists",
  });
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });

  if (!user || user.password !== password) {
    return next(new ErrorHandler("invalid username/password", 400));
  }

  let paylod = { subject: user._id };
  let token = jwt.sign(paylod, process.env.SECRET_KET_TOKEN);

  let userDetail = await User.findOne({ _id: user._id }).select("-password");

  res.status(200).send({ token, userDetail });
});

//get All users
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    success: true,
    user,
  });
});
