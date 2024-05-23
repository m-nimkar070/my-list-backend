import { Request, Response } from 'express';
import Movie from '../models/movie';

export const addMovie = async (req: Request, res: Response) => {
  try {
    const { id, title, description, genres, releaseDate, director, actors } = req.body;
    const newMovie = new Movie({ id, title, description, genres, releaseDate, director, actors });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    if(error instanceof Error){
        res.status(500).json({ error: error.message });
    }else{
        res.status(500).json({error:"An unknow error is occurred"})
    }
  }
};
