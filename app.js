const express = require("express");
const app = express();
const cors = require("cors");

const ErrorMiddleware = require("./middlewares/errors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

//import all routes
const test = require("./routes/test");
const user = require("./routes/user");
const category = require("./routes/category");
const quiz = require("./routes/quiz");
const qq = require("./routes/quizQuestion");
const eq = require("./routes/evalQuiz");

app.get("/", (req, res) => {
  res.json({ users: "allUsers" });
});
app.use("/api/v1", test);
app.use("/api/v1", user);
app.use("/api/v1", category);
app.use("/api/v1", quiz);
app.use("/api/v1", qq);
app.use("/api/v1", eq);

//Middleware error handler
app.use(ErrorMiddleware);

module.exports = app;
