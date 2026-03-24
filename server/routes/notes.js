const express = require("express");
const router = express.Router();
require("dotenv").config();

const pool = require("../db");
const { resolveSoa } = require("node:dns");

router.get("/notes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM notes");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/notes", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        error: "Title and content are required",
      });
    }

    const result = await pool.query(
      `INSERT INTO notes (title, content)
       VALUES ($1, $2)
       RETURNING *`,
      [title, content],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/notes/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const result = await pool.query(
      `SELECT * FROM notes
       WHERE id=$1`,
      [id],
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/notes/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const result = await pool.query(
      `DELETE FROM notes
       WHERE id=$1
       RETURNING *`,
      [id],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
