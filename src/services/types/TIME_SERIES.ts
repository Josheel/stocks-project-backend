export interface TimeSeriesDataPoint {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export type TimeSeries = Record<string, TimeSeriesDataPoint>;

export interface CandleStickPoint {
   x: string,
   y: [number, number, number, number] // [open, high, low, close]
}

export function normalizeTimeSeriesResultsForCandleStick(data: TimeSeries): CandleStickPoint[] {
    return Object.entries(data).map(([date, point]) => ({
        x: date,
        y: [
            parseFloat(point['1. open']), 
            parseFloat(point['2. high']), 
            parseFloat(point['3. low']), 
            parseFloat(point['4. close'])
        ]
    }));
}