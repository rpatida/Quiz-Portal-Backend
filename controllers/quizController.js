const Quiz = require("../models/quiz");
const Category = require("../models/category");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.addQuiz = catchAsyncErrors(async (req, res, next) => {
  delete req.body._id;
  const quiz = await Quiz.create(req.body);
  if (!quiz) {
    return next(new ErrorHandler("Internal Server Error", 401));
  }

  res.status(200).send({ quiz });
});

exports.updateQuiz = catchAsyncErrors(async (req, res) => {
  console.log("req.body", req.body);
  const {
    _id,
    title,
    description,
    maxMarks,
    numberOfQuestions,
    active,
    category,
  } = req.body;

  const quiz = await Quiz.findById(_id);

  if (!quiz) {
    return new ErrorHandler("quiz not fount", 400);
  }

  quiz.title = title;
  quiz.description = description;
  quiz.maxMarks = maxMarks;
  quiz.numberOfQuestions = numberOfQuestions;
  quiz.active = active;
  quiz.category = category;
  await quiz.save();

  res.status(200).json({
    success: true,
  });
});

exports.deleteQuiz = catchAsyncErrors(async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);

  if (!quiz) {
    return new ErrorHandler("quiz not fount", 400);
  }

  await quiz.remove();

  res.status(200).json({
    success: true,
  });
});

exports.getQuiz = catchAsyncErrors(async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);

  if (!quiz) {
    return new ErrorHandler("quiz not fount", 400);
  }

  res.status(200).send({ quiz });
});

exports.getAllQuizByCategoryId = catchAsyncErrors(async (req, res) => {
  const quiz = await Quiz.find({
    $and: [{ category: req.params.cId }, { active: "true" }],
  }).populate({
    path: "category",
  });
  res.status(200).json({
    success: true,
    quiz,
  });
});

exports.getAllQuiz = catchAsyncErrors(async (req, res) => {
  const quiz = await Quiz.find({ $or: [{ active: "true" }] }).populate({
    path: "category",
  });
  res.status(200).json({
    success: true,
    quiz,
  });
});
