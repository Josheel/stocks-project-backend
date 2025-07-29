import dotenv from 'dotenv';

dotenv.config();

export const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY || '';
export const BASE_URL = 'https://www.alphavantage.co/query';

if (!ALPHA_VANTAGE_API_KEY) {
  throw new Error('Missing ALPHA_VANTAGE_API_KEY in environment variables.');
}