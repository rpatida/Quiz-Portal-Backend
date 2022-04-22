const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//setting up config file
dotenv.config({ path: "config/config.env" });

mongoose
  .connect(process.env.DB_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then((cons) => {
    console.log(
      `MongoDB Database connected with HOST: ${cons.connection.host}`
    );
  });

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server Started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
