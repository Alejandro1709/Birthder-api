import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 4000,
};
