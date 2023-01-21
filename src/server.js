import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
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

app.use('/api/v1/contacts', contactRoutes);

export default app;
