import express from 'express';
import { getGlobalQuote } from '../controllers/stockController';

const router = express.Router();

router.get('/quote', getGlobalQuote);

export default router;
