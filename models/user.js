const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    required: [true, "Please enter username"],
    type: String,
  },
  name: {
    required: [true, "Please enter name"],
    type: String,
  },
  password: {
    required: [true, "Please enter name"],
    maxLength: [10, "Product password can not exceed 10 characters"],
    type: String,
  },
  phoneno: {
    required: [true, "Please enter phoneno"],
    type: Number,
  },
  enabled: {
    default: true,
    type: Boolean,
  },
  role: {
    default: "USER",
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
