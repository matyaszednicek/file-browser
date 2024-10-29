import express from 'express';
import cors from 'cors';
import fileRoutes from './routes/files';

const app = express();

app.use(cors());
app.use('/', fileRoutes);

export default app;
