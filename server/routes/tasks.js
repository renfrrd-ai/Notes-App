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

router.post("/", authenticateToken, async (req, res) => {
  try {
    const { title, description, due_date } = req.body;
    if (!title || !description || !due_date) {
      return res.status(400).json({
        message: "Title, Description and due date are required",
      });
    }
    const result = await pool.query(
      `
        INSERT INTO tasks (title, description, due_date, user_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
      [title, description, due_date, req.user.id],
    );
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
