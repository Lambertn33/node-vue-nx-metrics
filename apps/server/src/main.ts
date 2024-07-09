import express from 'express';

import usersRoutes from './routes/users.route';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/users', usersRoutes);

export default app;
