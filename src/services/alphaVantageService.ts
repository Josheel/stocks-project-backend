import { alphaVantageRequest } from './clients/alphaVantageClient';
import { ALPHA_VANTAGE_API_KEY, BASE_URL } from '../config/alphaVantage';
import { SearchResult, RawSearchResult, normalizeSearchResults } from './types/SYMBOL_SEARCH';
import { RawGlobalQuote, GlobalQuote, normalizeGlobalQuote } from './types/GLOBAL_QUOTE';

export async function fetchGlobalQuote(symbol: string): Promise<GlobalQuote> {
    const response = await alphaVantageRequest<{ 'Global Quote' : RawGlobalQuote }>({
        function: 'GLOBAL_QUOTE',
        symbol
    });

    return normalizeGlobalQuote(response['Global Quote']);
}

export async function fetchStockOverview(symbol: string): Promise<any> {
    const response = await alphaVantageRequest({
            function: 'OVERVIEW',
            symbol
    });

    return response;
}

export async function fetchSymbolSearch(keywords: string):  Promise<SearchResult[]> {
 const response = await alphaVantageRequest<{ bestMatches: RawSearchResult[] }>( {
            function: 'SYMBOL_SEARCH',
            keywords
    });

    return normalizeSearchResults(response.bestMatches ?? []);
}