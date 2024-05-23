import User from '../models/user';
import Movie from '../models/movie';
import TVShow from '../models/tvshow';

export const addToList = async (userId: string, contentId: string) => {
  const user = await User.findOne({id: userId});
  if (!user) throw new Error('User not found');

  const movie = await Movie.findOne({id:contentId});
  const tvShow = await TVShow.findOne({id:contentId});

  if (!movie && !tvShow) {
    throw new Error('Content not found');
  }

  if (!user.myList.includes(contentId)) {
    user.myList.push(contentId);
    await user.save();
  }

  return user;
};

export const removeFromList = async (userId: string, contentId: string) => {
  const user = await User.findOne({id:userId});
  if (!user) throw new Error('User not found');
  user.myList = user.myList.filter(item => item !== contentId);
  await user.save();
  return user;
};

export const listMyItems = async (userId: string, page: number, limit: number) => {
  const user = await User.findOne({id:userId});
  if (!user) throw new Error('User not found');
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const items = user.myList.slice(startIndex, endIndex);
  return {
    totalItems: user.myList.length,
    items
  };
};
