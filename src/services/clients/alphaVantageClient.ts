import axios from 'axios';
import { ALPHA_VANTAGE_API_KEY, BASE_URL } from '../../config/alphaVantage';

export async function alphaVantageRequest<T = unknown>(
    params: Record<string, string>
): Promise<T> {
    try {
        console.log(params);
        const response = await axios.get<T>(BASE_URL, {
            params: {
                ...params,
                apikey: ALPHA_VANTAGE_API_KEY
            }
        });

        const data = response.data;

        if (
            typeof data === 'object' &&
            data !== null &&
            ('Note' in data || 'Error Message' in data)
        ) {
            const message = (data as any)['Note'] || (data as any)['Error Message'];
            throw new Error(`Alpha Vantage API error: ${message}`);
        }

        return data;
    } catch (error: any) {
        console.error('Alpha Vantage request failed: ', error);
        throw new Error('Alpha Vantage request failed');
    }

}