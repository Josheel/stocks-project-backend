import { alphaVantageRequest } from './clients/alphaVantageClient';
import { ALPHA_VANTAGE_API_KEY, BASE_URL } from '../config/alphaVantage';
import { SearchResult, RawSearchResult, normalizeSearchResults } from './types/SYMBOL_SEARCH';
import { RawGlobalQuote, GlobalQuote, normalizeGlobalQuote } from './types/GLOBAL_QUOTE';
import { getTimeSeriesWeekly } from '../controllers/stockController';
import { TimeSeries, normalizeTimeSeriesResultsForCandleStick } from './types/TIME_SERIES';
import { StockDetailsResponse, prepareStockDetailsResponse } from './types/StockDetails';
import { Overview } from './types/OVERVIEW';

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


export async function fetchTimeSeriesWeekly(symbol: string): Promise<any> {
    const response = await alphaVantageRequest<{ "Weekly Time Series": TimeSeries}>({
        function: 'TIME_SERIES_WEEKLY',
        symbol
    })

    const weeklyData: TimeSeries | undefined = response?.["Weekly Time Series"];

  if (!weeklyData) {
    return [];
  }

  return normalizeTimeSeriesResultsForCandleStick(weeklyData);
}

export async function fetchStockDetails(symbol: string): Promise<StockDetailsResponse> {
    const quote: GlobalQuote = await fetchGlobalQuote(symbol);
    const overview: Overview = await fetchStockOverview(symbol);
    const response: StockDetailsResponse = prepareStockDetailsResponse(quote, overview); 

    return response;
}