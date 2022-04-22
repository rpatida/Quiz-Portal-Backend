const Category = require("../models/category");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.addCategory = catchAsyncErrors(async (req, res) => {
  const { title, description } = req.body;
  const category = await Category.create({ title, description });

  if (!category) {
    return next(new ErrorHandler("Internal Server Error", 401));
  }

  res.status(200).send({ category });
});

exports.getCategory = catchAsyncErrors(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return new ErrorHandler("category not fount", 400);
  }

  res.status(200).send({ category });
});

exports.updateCategory = catchAsyncErrors(async (req, res) => {
  const { _id, title, description } = req.body;

  const category = await Category.findById(_id);

  if (!category) {
    return new ErrorHandler("category not fount", 400);
  }

  (category.title = title),
    (category.description = description),
    await category.save();

  res.status(200).json({
    success: true,
  });
});

// get my order => api/v1/order/me
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return new ErrorHandler("category not fount", 400);
  }

  await category.remove();

  res.status(200).json({
    success: true,
  });
});

exports.getAllCategory = catchAsyncErrors(async (req, res) => {
  const category = await Category.find();
  res.status(200).json({
    success: true,
    category,
  });
});
