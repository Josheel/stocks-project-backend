import axios from 'axios';
import config from '../../config';

export async function alphaVantageRequest<T = unknown>(
    params: Record<string, string>
): Promise<T> {
    try {
        console.log(params);
        const response = await axios.get<T>(config.ALPHA_VANTAGE_BASE_URL, {
            params: {
                ...params,
                apikey: config.ALPHA_VANTAGE_API_KEY
            }
        });

        const data = response.data;
        
        if (
            typeof data === 'object' &&
            data !== null &&
            ('Note' in data || 'Error Message' in data || 'Information' in data)
        ) {
            console.log('should be here');
            const message = (data as any)['Note'] || (data as any)['Error Message'] || (data as any)['Information'];
            throw new Error(`Alpha Vantage API error: ${message}`);
        }

        return data;
    } catch (error: any) {
        console.error('Alpha Vantage request failed: ', error);
        throw new Error('Alpha Vantage request failed');
    }

}

// import axios from 'axios';
// import { ALPHA_VANTAGE_API_KEY, BASE_URL } from '../../config/alphaVantage';

// export async function alphaVantageRequest<T = unknown>(
//   params: Record<string, string>
// ): Promise<T> {
//   try {
//     const response = await axios.get<T>(BASE_URL, {
//       params: {
//         ...params,
//         apikey: ALPHA_VANTAGE_API_KEY
//       }
//     });

//     const data = response.data;

//     // Check for Alpha Vantage error responses embedded in 200 OK
//     if (
//       typeof data === 'object' &&
//       data !== null &&
//       ('Note' in data || 'Error Message' in data || 'Information' in data)
//     ) {
//       const message =
//         (data as Record<string, string>)['Note'] ||
//         (data as Record<string, string>)['Error Message'] ||
//         (data as Record<string, string>)['Information'] ||
//         'Unknown Alpha Vantage error';

//       // Throw a custom error with context
//       const err = new Error(`Alpha Vantage API error: ${message}`);
//       (err as any).isAlphaVantageError = true;
//       throw err;
//     }

//     return data;
//   } catch (error) {
//     // Let original message through if it's our custom error
//     if ((error as any).isAlphaVantageError) {
//       throw error;
//     }

//     console.error('Alpha Vantage request failed:', error);

//     // Throw a more helpful message
//     throw new Error(
//       axios.isAxiosError(error)
//         ? `Network/API error: ${error.message}`
//         : 'Unexpected error occurred in Alpha Vantage request'
//     );
//   }
// }