import express from 'express';

import cors from 'cors';

import { getMetrics, metricsMiddleware } from './metrics';

import usersRoutes from './routes/users.route';

import postsRoutes from './routes/posts.route';

const app = express();

app.use(metricsMiddleware);

app.use(cors());

app.get('/metrics', getMetrics);

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/users', usersRoutes);

app.use('/posts', postsRoutes);

export default app;
