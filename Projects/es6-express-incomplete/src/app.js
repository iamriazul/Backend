import cors from 'cors';
import express from 'express';
import pinoHttp from 'pino-http';
//import errorHandler from './middlewares/errorHandler.js';
import notFound from './middlewares/notFound.js';
//import routes from './routes/index.js';
import logger from './utils/logger.js';

const app = express();

app.use(cors());
app.use(pinoHttp({ logger }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
  });
});
//app.use('/api/v1', routes);

app.use(notFound);
//app.use(errorHandler);

export default app;