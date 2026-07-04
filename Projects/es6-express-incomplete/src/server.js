import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './config/db.js';
import logger from './utils/logger.js';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

let server;

const startServer = async () => {
  try {
    await connectDB();
    
    server = app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    logger.error({ err: error }, 'Failed to start server');
    process.exit(1);
  }
};

const shutdown = (signal) => {
  logger.info(`${signal} received. Shutting down gracefully.`);

  if (server) {
    server.close(() => {
      logger.info('HTTP server closed.');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

startServer();
