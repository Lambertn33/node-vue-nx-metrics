import express from 'express';

import cors from 'cors';

import { getMetrics, metricsMiddleware } from './metrics';

import {
  GET_ALL as USERS_GET_ALL,
  GET_ONE as USERS_GET_ONE,
  GET_USER_POSTS,
} from './controllers/users.controller';

import {
  GET_ALL as POSTS_GET_ALL,
  GET_ONE as POSTS_GET_ONE,
} from './controllers/posts.controller';

const app = express();

app.use(metricsMiddleware);

app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/users', USERS_GET_ALL);

app.get('/users/:id', USERS_GET_ONE);

app.get('/users/:id/posts', GET_USER_POSTS);

app.get('/posts', POSTS_GET_ALL);

app.get('/posts/:id', POSTS_GET_ONE);

app.get('/metrics', getMetrics);

export default app;
