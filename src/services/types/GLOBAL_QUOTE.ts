export interface RawGlobalQuote {
    '01. symbol': string;
    '02. open': string;
    '03. high': string;
    '04. low': string;
    '05. price': string;
    '06. volume': string;
    '07. latest trading day': string;
    '08. previous close': string;
    '09. change': string;
    '10. change percent': string;
}

export interface GlobalQuote {
    symbol: string;
    open: number;
    high: number;
    low: number;
    price: number;
    volume: number;
    latestTradingDay: string;
    previousClose: number;
    change: number;
    changePercent: string;
}

export function normalizeGlobalQuote(raw: RawGlobalQuote): GlobalQuote {
  return {
    symbol: raw['01. symbol'],
    open: parseFloat(raw['02. open']),
    high: parseFloat(raw['03. high']),
    low: parseFloat(raw['04. low']),
    price: parseFloat(raw['05. price']),
    volume: parseInt(raw['06. volume'], 10),
    latestTradingDay: raw['07. latest trading day'],
    previousClose: parseFloat(raw['08. previous close']),
    change: parseFloat(raw['09. change']),
    changePercent: raw['10. change percent'],
  };
}
