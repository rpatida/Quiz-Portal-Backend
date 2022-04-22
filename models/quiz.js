const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  maxMarks: {
    type: Number,
    required: true,
  },
  numberOfQuestions: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
