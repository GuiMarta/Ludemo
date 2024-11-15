import express from 'express';
import routes from './routes.js';
import cors from 'cors';
const app = express();
process.setMaxListeners(20); // Define o limite para 20 ouvintes
app.use(cors());
//indicar para o express ler o body com json
app.use(express.json());

//usando o router do arquivo routes.js
app.use(routes);

export default app;