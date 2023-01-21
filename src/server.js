import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config.js';

const app = express();

const { ENV } = config;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// logging
if (ENV === 'development') {
  app.use(morgan('dev'));
}

export default app;
