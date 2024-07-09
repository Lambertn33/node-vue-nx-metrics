import express from 'express';

import usersRoutes from './routes/users.route';

import postsRoutes from './routes/posts.route';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/users', usersRoutes);

app.use('/posts', postsRoutes);

export default app;
