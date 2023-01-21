import express from 'express';
import morgan from 'morgan';
import config from './config.js';

const app = express();

const { ENV } = config;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logging
if (ENV === 'development') {
  app.use(morgan('dev'));
}

export default app;
