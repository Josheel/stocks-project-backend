import axios from 'axios';
import {ALPHA_VANTAGE_API_KEY, BASE_URL } from '../config/alphaVantage';

export async function getStockQuote(symbol: string): Promise<any> {
    const response = await axios.get(BASE_URL, {
        params: {
            function: 'GLOBAL_QUOTE',
            symbol,
            apikey: ALPHA_VANTAGE_API_KEY
        }
    });

    return response.data;
}