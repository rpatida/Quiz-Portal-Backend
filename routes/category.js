const express = require("express");
const router = express.Router();

const {
  addCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.route("/addCategory").post(addCategory);
router.route("/updateCategory").put(updateCategory);
router.route("/getCategory/:id").get(getCategory);
router.route("/getAllCategory").get(getAllCategory);
router.route("/deleteCategory/:id").delete(deleteCategory);

module.exports = router;
