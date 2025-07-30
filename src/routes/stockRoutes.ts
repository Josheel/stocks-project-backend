import express from 'express';
import { getGlobalQuote, getStockOverview, getSymbolSearch, getTimeSeriesWeekly } from '../controllers/stockController';
import { validateSymbolQuery } from '../middleware/validateSymbolQuery';

const router = express.Router();

router.get('/quote', validateSymbolQuery, getGlobalQuote);
router.get('/overview', validateSymbolQuery, getStockOverview);
router.get('/search', getSymbolSearch);
router.get('/timeweekly', validateSymbolQuery, getTimeSeriesWeekly);

export default router;
