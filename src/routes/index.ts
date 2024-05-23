import express from 'express';
import listRoutes from './listRoutes';
import movieRoutes from './movieRoutes';
import tvshowRoutes from './tvshowRoutes';
import userRoutes from './userRoutes';

const router = express.Router();

router.use('/list', listRoutes);
router.use('/movies', movieRoutes);
router.use('/tvshows', tvshowRoutes);
router.use('/users', userRoutes);

export default router;
