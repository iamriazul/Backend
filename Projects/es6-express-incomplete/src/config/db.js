import mongoose from 'mongoose';
import logger from '../utils/logger.js';

export const connectDB = async () => {
  const mongoUri =
    process.env.MONGO_URI ||
    'mongodb://localhost:27017/Oneproject';

  await mongoose.connect(mongoUri);
  logger.info(`MongoDB connected: ${mongoose.connection.host}`);
};
