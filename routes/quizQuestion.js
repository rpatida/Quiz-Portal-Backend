const express = require("express");
const router = express.Router();
const {
  addQuizQuestion,
  updateQuizQuestion,
  deleteQuizQuestion,
  getQuizQuestion,
  getAllQuizQuestion,
} = require("../controllers/quizQuestionController");

router.route("/getAllQuizQuestion/:qid").get(getAllQuizQuestion);
router.route("/getQuizQuestion/:id").get(getQuizQuestion);
router.route("/addQuizQuestion").post(addQuizQuestion);
router.route("/updateQuizQuestion").put(updateQuizQuestion);
router.route("/deleteQuizQestion/:id").delete(deleteQuizQuestion);

module.exports = router;
