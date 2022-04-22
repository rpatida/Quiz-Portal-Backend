exports.getTestData = (req, res) => {
  console.log("hi this is bacl");
  res.status(200).json({
    success: true,
    message: "Yes we are in node backend side....",
  });
};
