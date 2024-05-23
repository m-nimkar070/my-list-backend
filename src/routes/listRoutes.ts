import express from 'express';
import { addToMyList, removeFromMyList, listMyItems } from '../controllers/listController';

const router = express.Router();

router.post('/users/:userId/mylist', addToMyList);
router.delete('/users/:userId/mylist', removeFromMyList);
router.get('/users/:userId/mylist', listMyItems);

export default router;
