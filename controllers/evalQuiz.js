const EvalQuiz = require("../models/evalQuiz");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.addEvalQuiz = catchAsyncErrors(async (req, res) => {
  const eq = await EvalQuiz.create(req.body);

  if (!eq) {
    return next(new ErrorHandler("Internal Server Error", 401));
  }

  res.status(200).send({ eq });
});
