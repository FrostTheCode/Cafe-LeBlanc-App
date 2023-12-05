import express from 'express';
import morgan from 'morgan';
import cookieparser from 'cookie-parser';
import cors from 'cors';

//importamos las rotas para usuarios
import authRoutes from './routes/auth.routes.js'
//importamos las rutas para productos
import productRoutes from './routes/productos.routes.js'
//importamos las rutas para provedores
import provedorRoutes from './routes/provedor.routes.js'

    const app = express();
    
app.use(cors({
    origin: ['*',
    'http://localhost:5173',
    'http://localhost',
    'http://localhost/productos',
    'http://127.0.0.1:5173',
    'https://apiproductos-0w34.onrender.com',
    'https://frondend-y5y1.onrender.com',
   ],
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieparser());

//indicamos al servidor 
app.use('/api/',authRoutes);
app.use('/api/',productRoutes);
app.use('/api/',provedorRoutes);
export default app;