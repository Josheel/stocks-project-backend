export interface TimeSeriesDataPoint {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export type TimeSeries = Record<string, TimeSeriesDataPoint>;

// Candle Stick Time Series
export interface CandleStickPoint {
   x: string,
   y: [number, number, number, number] // [open, high, low, close]
}

// Line Chart for historical price data
export interface LineDataPoint {
    x: string,
    y: number
}

export interface TimeSeriesWeeklyResponse {
    candlestick: CandleStickPoint[],
    line: LineDataPoint[]
}

export function prepareTimeSeriesWeeklyResults(data: TimeSeries): TimeSeriesWeeklyResponse {
    const candleSeries: CandleStickPoint[] = [];
    const lineSeries: LineDataPoint[] = [];

    for (const [date, point] of Object.entries(data)) {
        const open = parseFloat(point["1. open"]);
        const high = parseFloat(point["2. high"]);
        const low = parseFloat(point["3. low"]);
        const close = parseFloat(point["4. close"]);

        candleSeries.push({
            x: date,
            y: [open, high, low, close]
        });

        lineSeries.push({
            x: date,
            y: close
        });
    }

    return {
        candlestick: candleSeries,
        line: lineSeries
    };
}
