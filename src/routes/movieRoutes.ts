import express from 'express';
import { addMovie } from '../controllers/movieController';

const router = express.Router();

router.post('/', addMovie);

export default router;
