const express = require("express");
const router = express.Router();

const pool = require("../db");
const authenticateToken = require("../middleware/auth");

router.get("/", authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT * FROM notes
      WHERE user_id=$1
      ORDER BY updated_at DESC`,
      [req.user.id],
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/", authenticateToken, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const result = await pool.query(
      `INSERT INTO notes (title, content, user_id)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [title, content, req.user.id],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/:id", authenticateToken, async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const result = await pool.query(
      `SELECT * FROM notes
       WHERE id=$1 AND user_id=$2`,
      [id, req.user.id],
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.put("/:id", authenticateToken, async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const result = await pool.query(
      `UPDATE notes
       SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP
       WHERE id=$3 AND user_id=$4
       RETURNING *`,
      [title, content, id, req.user.id],
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/:id", authenticateToken, async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const result = await pool.query(
      `DELETE FROM notes
       WHERE id=$1 and user_id=$2
       RETURNING *`,
      [id, req.user.id],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
