const express = require("express");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router.get("/", authenticateToken, async (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});

module.exports = router;
