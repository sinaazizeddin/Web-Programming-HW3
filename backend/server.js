import express from 'express';
import cors from 'cors';
import drawingRoutes from './drawingRoutes.js';
import './db.js'; // این فایل دیتابیس رو می‌سازه

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/drawing', drawingRoutes);

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
