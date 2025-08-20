import dotenv from 'dotenv';

dotenv.config();

const requiredEnv = ['ALPHA_VANTAGE_API_KEY', 'ALPHA_VANTAGE_BASE_URL'];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const config = {
  ALPHA_VANTAGE_API_KEY: process.env.ALPHA_VANTAGE_API_KEY as string,
  ALPHA_VANTAGE_BASE_URL: process.env.ALPHA_VANTAGE_BASE_URL as string,
  PORT: process.env.PORT,
  FRONT_END_ORIGIN: process.env.FRONT_END_ORIGIN,
  NODE_ENV: process.env.NODE_ENV
}

export default config;