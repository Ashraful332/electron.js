import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const initDB = async () => {
    const db = await open({
        filename: "./todo.db",
        driver: sqlite3.Database,
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      completed BOOLEAN
    )
  `);

    return db;
};