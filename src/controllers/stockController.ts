import { Request, Response } from 'express';
import { getStockQuote } from '../services/alphaVantageService';

export async function getGlobalQuote(req: Request, res: Response): Promise<void> {
    const rawSymbol = req.query.symbol;

    if (Array.isArray(rawSymbol)) {
        res.status(400).json({ error: 'Multiple symbols not supported.' });
        return;
    }

    if (typeof rawSymbol !== 'string') {
        res.status(400).json({ error: 'Symbol query parameter is required.' });
        return;
    }

    const trimmedSymbol = rawSymbol.trim();

    if (!trimmedSymbol) {
        res.status(400).json({ error: 'Symbol query parameter cannot be empty.' });
        return;
    }

    const symbol = trimmedSymbol.toUpperCase();

    try {
        const data = await getStockQuote(symbol);
        res.json(data);
    } catch (error){
        console.error((error as Error).message);
        res.status(500).json({ error: 'Failed to fetch stock data.' });
    }
}