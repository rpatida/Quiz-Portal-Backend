const User = require("../models/user");
//check if user is authenticated or not
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

exports.isAuthunticatedUser = catchAsyncErrors(async (req, res, next) => {
  if (!req.headers.authorization) {
    return next(new ErrorHandler("Unauthorized request", 401));
  }

  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return next(new ErrorHandler("Unauthorized request", 401));
  }
  let payload = jwt.verify(token, process.env.SECRET_KET_TOKEN);

  if (!payload) {
    return next(new ErrorHandler("Unauthorized request", 401));
  }

  req.userId = payload.subject;

  next();
});
