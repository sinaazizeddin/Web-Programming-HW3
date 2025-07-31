import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../db.sqlite');

const dbPromise = open({
  filename: dbPath,
  driver: sqlite3.Database,
});

dbPromise.then(async (db) => {
  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS drawings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT,
      data TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  const existingUsers = await db.all(`SELECT * FROM users`);
  if (existingUsers.length === 0) {
    await db.run(`INSERT INTO users (username) VALUES ('alice')`);
    await db.run(`INSERT INTO users (username) VALUES ('bob')`);
  }

  console.log('Database initialized.');
});

export default dbPromise;
