import { Request, Response, NextFunction } from 'express';

export function validateSymbolQuery(req: Request, res: Response, next: NextFunction) {
    const rawSymbol = req.query.symbol;

    if (Array.isArray(rawSymbol)) {
        return res.status(400).json({ error: 'Multiple symbols are not supported.' });
    }

    if( typeof rawSymbol !== 'string') {
        return res.status(400).json({ error: 'Symbol Query parameter is requred.' });
    }

    const trimmedSymbol = rawSymbol.trim();

    if(!trimmedSymbol) {
        return res.status(400).json({ error: 'Symbol query parameter cannot be empty.' });
    }

    req.query.symbol = trimmedSymbol.toUpperCase();

    next();
}