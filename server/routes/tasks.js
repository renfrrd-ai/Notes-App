const express = require("express");
const router = express.Router();

const pool = require("../db");
const authenticateToken = require("../middleware/auth");

router.get("/", authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      `
        SELECT * FROM tasks
        WHERE user_id = $1
        ORDER BY due_date ASC`,
      [req.user.id],
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
