import mongoose, { Schema, Document } from 'mongoose';

interface Episode {
  episodeNumber: number;
  seasonNumber: number;
  releaseDate: Date;
  director: string;
  actors: string[];
}

interface TVShow extends Document {
  id: string;
  title: string;
  description: string;
  genres: string[];
  episodes: Episode[];
}

const EpisodeSchema: Schema = new Schema({
  episodeNumber: { type: Number, required: true },
  seasonNumber: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  director: { type: String, required: true },
  actors: { type: [String], required: true },
});

const TVShowSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  genres: { type: [String], required: true },
  episodes: { type: [EpisodeSchema], required: true },
});

export default mongoose.model<TVShow>('TVShow', TVShowSchema);
