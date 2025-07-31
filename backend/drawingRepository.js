import dbPromise from './db.js';

export async function getUserByUsername(username) {
  const db = await dbPromise;
  return await db.get(`SELECT * FROM users WHERE username = ?`, [username]);
}

export async function saveDrawing(userId, title, data) {
  const db = await dbPromise;

  const existing = await db.get(`SELECT * FROM drawings WHERE user_id = ?`, [userId]);
  if (existing) {
    await db.run(`UPDATE drawings SET title = ?, data = ? WHERE user_id = ?`, [title, data, userId]);
  } else {
    await db.run(`INSERT INTO drawings (user_id, title, data) VALUES (?, ?, ?)`, [userId, title, data]);
  }
}

export async function loadDrawing(userId) {
  const db = await dbPromise;
  return await db.get(`SELECT * FROM drawings WHERE user_id = ?`, [userId]);
}
