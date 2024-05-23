import app from './app';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 8082;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Servers is running on port ${PORT}`);
});
