const express = require("express");
const router = express.Router();
const { getHistory } = require("../controller/history");

router.get("/get", (req, res) => {
  return res.render("history");
});
router.post("/post", getHistory);

module.exports = router;
