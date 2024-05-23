import { Request, Response } from 'express';
import { addToList , removeFromList ,listMyItems as listItems } from "../services/listService";

export const addToMyList = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const contentId = req.body.contentId;
    const user = await addToList(userId, contentId);
    res.status(200).json(user.myList);
  } catch (error) {
    if(error instanceof Error){
        res.status(500).json({ error: error.message });
    }else{
        res.status(500).json({error:"An unknow error is occurred"})
    }
  }
};

export const removeFromMyList = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const contentId = req.body.contentId;
    const user = await removeFromList(userId, contentId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user.myList);
  } catch (error) {
    if(error instanceof Error){
        res.status(500).json({ error: error.message });
    }else{
        res.status(500).json({error:"An unknow error is occurred"})
    }
  }
};

export const listMyItems = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const result = await listItems(userId, page, limit);
    res.status(200).json(result);
  } catch (error) {
    if(error instanceof Error){
        res.status(500).json({ error: error.message });
    }else{
        res.status(500).json({error:"An unknow error is occurred"})
    }
  }
};
