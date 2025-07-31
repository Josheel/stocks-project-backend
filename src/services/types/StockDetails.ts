import { GlobalQuote } from "./GLOBAL_QUOTE";
import { Overview } from "./OVERVIEW";

export interface StockDetailsResponse {
    Global_Quote: GlobalQuote,
    Details: {
        Name: string;
        Symbol: string;
        DividendYield: string;
        DividendPerShare: string;
        ExDividendDate: string;
        DividendDate: string;
        Exchange: string;
    }
}

export function prepareStockDetailsResponse(quote: GlobalQuote, overview: Overview): StockDetailsResponse {
    return {
        Global_Quote: quote,
        Details: 
            {
                "Name" : overview['Name'],
                "Symbol" : overview['Symbol'],
                "DividendYield" : overview['DividendYield'],
                "DividendPerShare" : overview['DividendPerShare'],
                "ExDividendDate" : overview['ExDividendDate'],
                "DividendDate" : overview['DividendDate'],
                "Exchange" : overview['Exchange']
            }
    }
}