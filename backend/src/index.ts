// index.ts

import express from 'express';
import fileRoutes from './routes/fileRoutes';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandling';
import { corsMiddleware } from './middlewares/corsMiddleware';

const app = express();

console.log('aqui')

app.use(corsMiddleware);
app.use(express.json());

app.use(fileRoutes);
app.use(userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
