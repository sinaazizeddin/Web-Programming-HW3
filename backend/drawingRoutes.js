import express from 'express';
import { handleSaveDrawing, handleLoadDrawing } from './drawingController.js';

const router = express.Router();

router.post('/', handleSaveDrawing);
router.get('/:username', handleLoadDrawing);

export default router;
