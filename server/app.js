import cookieParser from 'cookie-parser';
config();
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import errorMiddleware from './middlewares/error.middleware.js';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        credentials: true,
    })
);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow requests from http://localhost:5173
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(cookieParser());
app.use(morgan('dev'));

import userRoutes from './routes/user.routes.js';
import cartRoutes from './routes/cart.routes.js';
import productRoutes from './routes/product.routes.js';
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/product', productRoutes);

app.use(errorMiddleware);


export default app;
