import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { query } from "./db.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// List notes
app.get("/notes", async (req, res) => {
  const result = await query("SELECT * FROM notes ORDER BY created_at DESC");
  res.json(result.rows);
});

// Create a note
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const result = await query(
    "INSERT INTO notes (title, description, created_at) VALUES ($1, $2, NOW()) RETURNING *",
    [title, description]
  );
  res.status(201).json(result.rows[0]);
});

// Get single note
app.get("/notes/:id", async (req, res) => {
  const result = await query("SELECT * FROM notes WHERE id = $1", [
    req.params.id,
  ]);
  if (result.rows.length === 0) return res.status(404).json({ error: "Not found" });
  res.json(result.rows[0]);
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));