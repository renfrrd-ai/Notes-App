const express = require("express");
const router = express.Router();
const pg = require("pg");
require("dotenv").config();

const pool = new pg.Pool({
  user: process.env.DB_USER_NAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

router.get("/notes/", async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM notes");
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/note/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const results = await pool.query(`SELECT * FROM notes WHERE id=$1`, [id]);
    if (results.rows.length === 0)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
