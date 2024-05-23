import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
  id: string;
  username: string;
  preferences: {
    favoriteGenres: string[];
    dislikedGenres: string[];
  };
  watchHistory: {
    contentId: string;
    watchedOn: Date;
    rating?: number;
  }[];
  myList: string[];
}

const UserSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  preferences: {
    favoriteGenres: { type: [String], required: true },
    dislikedGenres: { type: [String], required: true },
  },
  watchHistory: [
    {
      contentId: { type: String, required: true },
      watchedOn: { type: Date, required: true },
      rating: { type: Number },
    },
  ],
  myList: { type: [String], default: [] },
});

export default mongoose.model<User>('User', UserSchema);
