import express from 'express';
import stockRoutes from './routes/stockRoutes';

const app = express();

app.use(express.json());
app.use('/api/stocks', stockRoutes);

export default app;