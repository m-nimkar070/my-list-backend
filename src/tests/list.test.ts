import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import User from '../models/user';
import Movie from '../models/movie';
import TVShow from '../models/tvshow';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI!);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('My List API', () => {
  let userId: string;
  let movieId: string;
  let tvShowId: string;

  beforeEach(async () => {
    const user = new User({ id: '123', username: 'testuser', preferences: { favoriteGenres: [], dislikedGenres: [] }, watchHistory: [], myList: [] });
    await user.save();
    userId = user.id;

    const movie = new Movie({ id: 'movie123', title: 'Test Movie', description: 'Test Description', genres: ['Action'], releaseDate: new Date(), director: 'Director', actors: ['Actor1', 'Actor2'] });
    await movie.save();
    movieId = movie.id;

    const tvShow = new TVShow({ id: 'tvshow123', title: 'Test TV Show', description: 'Test Description', genres: ['Drama'], episodes: [{ episodeNumber: 1, seasonNumber: 1, releaseDate: new Date(), director: 'Director', actors: ['Actor1', 'Actor2'] }] });
    await tvShow.save();
    tvShowId = tvShow.id;
  });

  afterEach(async () => {
    await User.deleteMany({});
    await Movie.deleteMany({});
    await TVShow.deleteMany({});
  });

  it('should add a movie to my list', async () => {
    const res = await request(app).post(`/api/list/users/${userId}/mylist`).send({ contentId: movieId });
    expect(res.status).toBe(200);
    expect(res.body).toContain(movieId);
  });

  it('should add a tv show to my list', async () => {
    const res = await request(app).post(`/api/list/users/${userId}/mylist`).send({ contentId: tvShowId });
    expect(res.status).toBe(200);
    expect(res.body).toContain(tvShowId);
  });

  it('should remove an item from my list', async () => {
    await request(app).post(`/api/list/users/${userId}/mylist`).send({ contentId: movieId });
    const res = await request(app).delete(`/api/users/${userId}/mylist`).send({ contentId: movieId });
    expect(res.status).toBe(200);
    expect(res.body).not.toContain(movieId);
  });

  it('should list items in my list with pagination', async () => {
    await request(app).post(`/api/list/users/${userId}/mylist`).send({ contentId: movieId });
    await request(app).post(`/api/list/users/${userId}/mylist`).send({ contentId: tvShowId });
    const res = await request(app).get(`/api/list/users/${userId}/mylist?page=1&limit=1`);
    expect(res.status).toBe(200);
    expect(res.body.items.length).toBe(1);
    expect(res.body.totalItems).toBe(2);
  });
});
