const express = require("express");
const router = express.Router();
const {
  addQuiz,
  updateQuiz,
  getAllQuiz,
  getQuiz,
  deleteQuiz,
  getAllQuizByCategoryId,
} = require("../controllers/quizController");

router.route("/getAllQuiz").get(getAllQuiz);
router.route("/getQuiz/:id").get(getQuiz);
router.route("/getAllQuizByCategoryId/:cId").get(getAllQuizByCategoryId);
router.route("/addQuiz").post(addQuiz);
router.route("/updateQuiz").put(updateQuiz);
router.route("/deleteQuiz/:id").delete(deleteQuiz);

module.exports = router;
