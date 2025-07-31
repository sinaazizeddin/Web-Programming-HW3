import { getUserByUsername, saveDrawing, loadDrawing } from './drawingRepository.js';

export async function handleSaveDrawing(req, res) {
  const { username, title, shapes } = req.body;

  if (!username || !shapes) {
    return res.status(400).json({ error: 'username and shapes are required' });
  }

  const user = await getUserByUsername(username);
  if (!user) return res.status(404).json({ error: 'User not found' });

  await saveDrawing(user.id, title, JSON.stringify(shapes));
  return res.status(200).json({ message: 'Drawing saved' });
}

export async function handleLoadDrawing(req, res) {
  const username = req.params.username;

  const user = await getUserByUsername(username);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const drawing = await loadDrawing(user.id);
  if (!drawing) return res.status(404).json({ error: 'No drawing found for user' });

  return res.json({
    title: drawing.title,
    shapes: JSON.parse(drawing.data),
  });
}
