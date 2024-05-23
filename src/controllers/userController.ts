import { Request, Response } from 'express';
import User from '../models/user';

export const addUser = async (req: Request, res: Response) => {
  try {
    const { id, username, preferences, watchHistory, myList } = req.body;
    const newUser = new User({ id, username, preferences, watchHistory, myList });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    if(error instanceof Error){
        res.status(500).json({ error: error.message });
    }else{
        res.status(500).json({error:"An unknow error is occurred"})
    }
  }
};
