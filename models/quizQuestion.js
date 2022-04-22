const mongoose = require("mongoose");

const quizQuestionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Quiz",
  },
});
module.exports = mongoose.model("QuizQuestion", quizQuestionSchema);
