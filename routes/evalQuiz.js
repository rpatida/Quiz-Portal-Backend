const express = require("express");
const router = express.Router();

const { addEvalQuiz } = require("../controllers/evalQuiz");

router.route("/addEvalQuiz").post(addEvalQuiz);
module.exports = router;
