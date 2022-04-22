const mongoose = require("mongoose");

const evalQuizSchema = new mongoose.Schema({
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Quiz",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  marksGot: {
    required: true,
    type: Number,
  },
  correctAnswer: {
    required: true,
    type: Number,
  },
  attempted: {
    required: true,
    type: Number,
  },
  resultStatus: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("EvalQuiz", evalQuizSchema);
