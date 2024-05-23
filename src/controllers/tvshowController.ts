import { Request, Response } from 'express';
import TVShow from '../models/tvshow';

export const addTVShow = async (req: Request, res: Response) => {
  try {
    const { id, title, description, genres, episodes } = req.body;
    const newTVShow = new TVShow({ id, title, description, genres, episodes });
    await newTVShow.save();
    res.status(201).json(newTVShow);
  } catch (error) {
    if(error instanceof Error){
        res.status(500).json({ error: error.message });
    }else{
        res.status(500).json({error:"An unknow error is occurred"})
    }
  }
};
