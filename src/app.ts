import express from 'express';
import stockRoutes from './routes/stockRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: 'http://localhost:5173' }));
}

app.use(express.json());
app.use('/api/stocks', stockRoutes);

export default app;