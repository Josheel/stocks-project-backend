import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import config from './config';
import stockRoutes from './routes/stockRoutes';

const app = express();

app.use(helmet());
app.use(compression());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: {
        error: 'You have sent too many requests in a short time. Please try again later'
    }
});
app.use(limiter);

if(config.NODE_ENV === 'development') {
    app.use(cors({ origin: `${config.FRONT_END_ORIGIN}` }));
}

app.use(express.json());
app.use('/api/stocks', stockRoutes);

export default app;
