import express from 'express';
import { addTVShow } from '../controllers/tvshowController';

const router = express.Router();

router.post('/', addTVShow);

export default router;
