const QuizQuestion = require("../models/quizQuestion");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.addQuizQuestion = catchAsyncErrors(async (req, res) => {
  delete req.body._id;

  const qq = await QuizQuestion.create(req.body);

  if (!qq) {
    return next(new ErrorHandler("Internal Server Error", 401));
  }

  res.status(200).send({ qq });
});

exports.updateQuizQuestion = catchAsyncErrors(async (req, res) => {
  const { _id, content, option1, option2, option3, option4, answer } = req.body;
  console.log(_id);

  const qq = await QuizQuestion.findById(_id);

  if (!qq) {
    return new ErrorHandler("Qestion not fount", 400);
  }

  qq.content = content;
  qq.option1 = option1;
  qq.option2 = option2;
  qq.option3 = option3;
  qq.option4 = option4;
  qq.answer = answer;

  await qq.save();

  res.status(200).json({
    success: true,
  });
});

exports.deleteQuizQuestion = catchAsyncErrors(async (req, res) => {
  console.log("delete", req.params.id);
  const qq = await QuizQuestion.findById(req.params.id);

  if (!qq) {
    return new ErrorHandler("Question not fount", 400);
  }

  await qq.remove();

  res.status(200).json({
    success: true,
  });
});

exports.getQuizQuestion = catchAsyncErrors(async (req, res) => {
  const qq = await QuizQuestion.findById(req.params.id);

  if (!qq) {
    return new ErrorHandler("Question not fount", 400);
  }

  res.status(200).send({ qq });
});

exports.getAllQuizQuestion = catchAsyncErrors(async (req, res) => {
  const qq = await QuizQuestion.find({ quizId: req.params.qid }).populate({
    path: "quizId",
  });

  res.status(200).json({
    success: true,
    qq,
  });
});
