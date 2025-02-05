import app from './main';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port, host, () => {
  console.log(`app started on http://${host}:${port}`);
});
