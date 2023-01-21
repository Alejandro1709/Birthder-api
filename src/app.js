import app from './server.js';
import config from './config.js';

const { PORT, ENV } = config;

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} on ${ENV} mode`);
});
