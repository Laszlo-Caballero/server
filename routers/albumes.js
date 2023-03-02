const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("se conecto a albumens");
});

module.exports = router;
