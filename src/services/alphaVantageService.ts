import { alphaVantageRequest } from './clients/alphaVantageClient';
import { ALPHA_VANTAGE_API_KEY, BASE_URL } from '../config/alphaVantage';
import { SearchResult, RawSearchResult, normalizeSearchResults } from './types/SYMBOL_SEARCH';
import { RawGlobalQuote, GlobalQuote, normalizeGlobalQuote } from './types/GLOBAL_QUOTE';
import { getTimeSeriesWeekly } from '../controllers/stockController';
import { TimeSeries, CandleStickPoint, LineDataPoint, TimeSeriesWeeklyResponse, prepareTimeSeriesWeeklyResults } from './types/TIME_SERIES';
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


export async function fetchTimeSeriesWeekly(symbol: string): Promise<TimeSeriesWeeklyResponse> {
    const response = await alphaVantageRequest<{ "Weekly Time Series": TimeSeries}>({
        function: 'TIME_SERIES_WEEKLY',
        symbol
    })

    const weeklyData: TimeSeries | undefined = response?.["Weekly Time Series"];

  if (!weeklyData) {
    return {
        candlestick: [],
        line: []
    };
  }
  const res = cnqT;
  return prepareTimeSeriesWeeklyResults(weeklyData);
}

export async function fetchStockDetails(symbol: string): Promise<StockDetailsResponse> {
    const quote: GlobalQuote = await fetchGlobalQuote(symbol);
    const overview: Overview = await fetchStockOverview(symbol);
    const response: StockDetailsResponse = prepareStockDetailsResponse(quote, overview); 
    const response2: StockDetailsResponse = cnqD;
    return response;
}

var cnqD: StockDetailsResponse = {
    "Global_Quote": {
        "symbol": "CNQ",
        "open": 30.71,
        "high": 30.955,
        "low": 30.58,
        "price": 30.79,
        "volume": 3968463,
        "latestTradingDay": "2025-08-04",
        "previousClose": 30.97,
        "change": -0.18,
        "changePercent": "-0.5812%"
    },
    "Details": {
        "Name": "Canadian Natural Resources Ltd",
        "Symbol": "CNQ",
        "DividendYield": "0.071",
        "DividendPerShare": "2.2",
        "ExDividendDate": "2025-06-13",
        "DividendDate": "2025-07-03",
        "Exchange": "NYSE"
    }
}

var cnqT: TimeSeriesWeeklyResponse = {
   candlestick: [
        {
            "x": "2025-08-01",
            "y": [
                43.4,
                44.43,
                42.58,
                42.72
            ]
        },
        {
            "x": "2025-07-25",
            "y": [
                42.38,
                43.28,
                41.75,
                43.01
            ]
        },
        {
            "x": "2025-07-18",
            "y": [
                43.98,
                44,
                41.95,
                42.3
            ]
        },
        {
            "x": "2025-07-11",
            "y": [
                43.93,
                44.4,
                42.9,
                43.91
            ]
        },
        {
            "x": "2025-07-04",
            "y": [
                43.04,
                44.07,
                42.77,
                43.77
            ]
        },
        {
            "x": "2025-06-27",
            "y": [
                46.19,
                46.44,
                42.84,
                43.11
            ]
        },
        {
            "x": "2025-06-20",
            "y": [
                45.5,
                46.915,
                45,
                46
            ]
        },
        {
            "x": "2025-06-13",
            "y": [
                43.42,
                46.25,
                42.79,
                45.9
            ]
        },
        {
            "x": "2025-06-06",
            "y": [
                42.48,
                43.54,
                41.92,
                43.25
            ]
        },
        {
            "x": "2025-05-30",
            "y": [
                42.44,
                43.45,
                41.47,
                41.67
            ]
        },
        {
            "x": "2025-05-23",
            "y": [
                42.85,
                43.1,
                41.83,
                42.61
            ]
        },
        {
            "x": "2025-05-16",
            "y": [
                44,
                45.015,
                42.81,
                42.9
            ]
        },
        {
            "x": "2025-05-09",
            "y": [
                39.48,
                42.7,
                38.58,
                42.53
            ]
        },
        {
            "x": "2025-05-02",
            "y": [
                40.62,
                40.98,
                38.85,
                40.04
            ]
        },
        {
            "x": "2025-04-25",
            "y": [
                39.47,
                41.18,
                39.06,
                40.68
            ]
        },
        {
            "x": "2025-04-17",
            "y": [
                38.47,
                40.19,
                37.5,
                39.88
            ]
        },
        {
            "x": "2025-04-11",
            "y": [
                37.92,
                39.77,
                34.92,
                37.72
            ]
        },
        {
            "x": "2025-04-04",
            "y": [
                43.43,
                45.06,
                38.005,
                39.24
            ]
        },
        {
            "x": "2025-03-28",
            "y": [
                43.73,
                45.335,
                43.41,
                43.73
            ]
        },
        {
            "x": "2025-03-21",
            "y": [
                42.46,
                44.41,
                42.23,
                43.47
            ]
        },
        {
            "x": "2025-03-14",
            "y": [
                40.65,
                42.38,
                40,
                42.21
            ]
        },
        {
            "x": "2025-03-07",
            "y": [
                40.66,
                41.64,
                37.11,
                40.74
            ]
        },
        {
            "x": "2025-02-28",
            "y": [
                42.66,
                42.87,
                39.92,
                40.85
            ]
        },
        {
            "x": "2025-02-21",
            "y": [
                42.7,
                43.79,
                42.51,
                42.66
            ]
        },
        {
            "x": "2025-02-14",
            "y": [
                43.76,
                44.43,
                42.525,
                42.67
            ]
        },
        {
            "x": "2025-02-07",
            "y": [
                42.01,
                45.11,
                42.01,
                43.42
            ]
        },
        {
            "x": "2025-01-31",
            "y": [
                44.5,
                45.55,
                43.36,
                44.15
            ]
        },
        {
            "x": "2025-01-24",
            "y": [
                45.17,
                46.99,
                44.42,
                44.95
            ]
        },
        {
            "x": "2025-01-17",
            "y": [
                47.37,
                48.26,
                44.04,
                45.01
            ]
        },
        {
            "x": "2025-01-10",
            "y": [
                46.24,
                48.21,
                45.96,
                47.27
            ]
        },
        {
            "x": "2025-01-03",
            "y": [
                43.5,
                45.65,
                43.23,
                45.61
            ]
        },
        {
            "x": "2024-12-27",
            "y": [
                43.78,
                44.05,
                43.24,
                43.48
            ]
        },
        {
            "x": "2024-12-24",
            "y": [
                42.34,
                43.72,
                42.21,
                43.47
            ]
        },
        {
            "x": "2024-12-20",
            "y": [
                44.6,
                44.6,
                42.04,
                42.5
            ]
        },
        {
            "x": "2024-12-13",
            "y": [
                46.23,
                46.67,
                43.91,
                44.78
            ]
        },
        {
            "x": "2024-12-06",
            "y": [
                47.67,
                48.42,
                45.47,
                45.66
            ]
        },
        {
            "x": "2024-11-29",
            "y": [
                48.4,
                48.75,
                46.02,
                47.52
            ]
        },
        {
            "x": "2024-11-22",
            "y": [
                46.88,
                48.92,
                46.42,
                48.71
            ]
        },
        {
            "x": "2024-11-15",
            "y": [
                47.54,
                48.25,
                45.62,
                46.61
            ]
        },
        {
            "x": "2024-11-08",
            "y": [
                47.72,
                48.55,
                46.96,
                47.57
            ]
        },
        {
            "x": "2024-11-01",
            "y": [
                47.65,
                48.45,
                47.04,
                47.28
            ]
        },
        {
            "x": "2024-10-25",
            "y": [
                49.49,
                49.68,
                48.13,
                49.39
            ]
        },
        {
            "x": "2024-10-18",
            "y": [
                49.54,
                49.73,
                48.47,
                49.06
            ]
        },
        {
            "x": "2024-10-11",
            "y": [
                48.62,
                52.145,
                48.56,
                51.71
            ]
        },
        {
            "x": "2024-10-04",
            "y": [
                44.52,
                48.315,
                44.43,
                48.22
            ]
        },
        {
            "x": "2024-09-27",
            "y": [
                45.3,
                46.91,
                43.78,
                44.89
            ]
        },
        {
            "x": "2024-09-20",
            "y": [
                43.85,
                46.09,
                43.04,
                45.25
            ]
        },
        {
            "x": "2024-09-13",
            "y": [
                45.32,
                45.79,
                43.39,
                43.4
            ]
        },
        {
            "x": "2024-09-06",
            "y": [
                48,
                48,
                44.9,
                45.07
            ]
        },
        {
            "x": "2024-08-30",
            "y": [
                50,
                50.72,
                48.375,
                48.78
            ]
        },
        {
            "x": "2024-08-23",
            "y": [
                50.01,
                50.58,
                48.35,
                49.24
            ]
        },
        {
            "x": "2024-08-16",
            "y": [
                48.05,
                50.87,
                48.04,
                50
            ]
        },
        {
            "x": "2024-08-09",
            "y": [
                44.87,
                47.85,
                44.78,
                47.82
            ]
        },
        {
            "x": "2024-08-02",
            "y": [
                47.79,
                50.1,
                45.69,
                46.25
            ]
        },
        {
            "x": "2024-07-26",
            "y": [
                48.34,
                48.94,
                46.56,
                47.63
            ]
        },
        {
            "x": "2024-07-19",
            "y": [
                49.5,
                50.33,
                48.21,
                48.32
            ]
        },
        {
            "x": "2024-07-12",
            "y": [
                48.92,
                50.36,
                48.29,
                49.22
            ]
        },
        {
            "x": "2024-07-05",
            "y": [
                49.7,
                50.25,
                48.97,
                49.05
            ]
        },
        {
            "x": "2024-06-28",
            "y": [
                47.24,
                49.4,
                47.24,
                48.73
            ]
        }
   ],
   line: [
       {
            "x": "2005-07-15",
            "y": 49.1254
        },
        {
            "x": "2005-07-08",
            "y": 48.6216
        },
        {
            "x": "2005-06-30",
            "y": 44.7418
        },
        {
            "x": "2005-06-24",
            "y": 45.5682
        },
        {
            "x": "2005-06-17",
            "y": 45.548
        },
        {
            "x": "2005-06-10",
            "y": 40.56
        },
        {
            "x": "2005-06-03",
            "y": 38.2524
        },
        {
            "x": "2005-05-27",
            "y": 37.1238
        },
        {
            "x": "2005-05-20",
            "y": 33.909
        },
        {
            "x": "2005-05-13",
            "y": 67.1532
        },
        {
            "x": "2005-05-06",
            "y": 70.6096
        },
        {
            "x": "2005-04-29",
            "y": 62.8806
        },
        {
            "x": "2005-04-22",
            "y": 66.8812
        },
        {
            "x": "2005-04-15",
            "y": 62.9308
        },
        {
            "x": "2005-04-08",
            "y": 69.0274
        },
        {
            "x": "2005-04-01",
            "y": 70.0352
        },
        {
            "x": "2005-03-24",
            "y": 67.7678
        },
        {
            "x": "2005-03-18",
            "y": 71.6978
        },
        {
            "x": "2005-03-11",
            "y": 69.1282
        },
        {
            "x": "2005-03-04",
            "y": 74.7208
        },
        {
            "x": "2005-02-25",
            "y": 72.8062
        },
        {
            "x": "2005-02-18",
            "y": 68.171
        },
        {
            "x": "2005-02-11",
            "y": 63.888
        },
        {
            "x": "2005-02-04",
            "y": 58.9402
        },
        {
            "x": "2005-01-28",
            "y": 54.537
        },
        {
            "x": "2005-01-21",
            "y": 52.9344
        },
        {
            "x": "2005-01-14",
            "y": 52.854
        }
   ]
};