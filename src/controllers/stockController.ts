import { Request, Response } from 'express';
import { fetchGlobalQuote, fetchStockOverview, fetchSymbolSearch } from '../services/alphaVantageService';

export async function getGlobalQuote(req: Request, res: Response): Promise<void> {
    const symbol = req.query.symbol as string;
    try {
        const data = await fetchGlobalQuote(symbol);
        res.json(data);
    } catch (error){
        console.error('Error in getGlobalQuote', error);
        res.status(500).json({ error: 'Failed to fetch stock data.' });
    }
}

export async function getStockOverview(req: Request, res: Response): Promise<void> {
    const symbol = req.query.symbol as string;
    try {
        const data = await fetchStockOverview(symbol);
        res.json(data);
    } catch (error) {
        console.error('Error in getStockOverview', error);
        res.status(500).json({ error: 'Failed to fetch stock data.' });
    }
}

export async function getSymbolSearch(req: Request, res: Response): Promise<void> {
    const rawQuery = req.query.search;

    if (typeof rawQuery !== 'string' || !rawQuery.trim()) {
       res.json([]);
       return;
    }

    const searchQuery =  rawQuery.trim();
    try {
        const data = await fetchSymbolSearch(searchQuery);
        res.json(data);
    } catch (error) {
        console.error('Error in getSymbolSearch', error);
        res.json([]);
    }
}