import express from 'express';
import cors from "cors";
import { initDB } from "./db/db.js";

export const startServer = async () => {
  const app = express();
  const db = await initDB();

  app.use(cors());
  app.use(express.json());

  // GET সব todo
  app.get("/todos", async (_, res) => {
    const todos = await db.all("SELECT * FROM todos");
    res.json(todos);
  });

  // ADD todo
  app.post("/todos", async (req, res) => {
    const { title } = req.body;
    await db.run("INSERT INTO todos (title, completed) VALUES (?, ?)", [
      title,
      false,
    ]);
    res.json({ success: true });
  });

  // UPDATE
  app.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    await db.run("UPDATE todos SET completed=? WHERE id=?", [
      completed,
      id,
    ]);

    res.json({ success: true });
  });

  // DELETE
  app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
    await db.run("DELETE FROM todos WHERE id=?", [id]);
    res.json({ success: true });
  });

  app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
  });
};