import express, { Request, Response } from 'express';
import cors from 'cors'; // O cors serve principalmente para evitar erros futuros 
import routes from './routes';

const app = express(); //Inicializando a lib express

app.use(cors());                               // Basicamente tanto faz a porta, seu app vai funcionar
app.use(express.json());                       // Intercepta o JSON e transforma em objeto JS
app.use(routes);                               // O express agora está usando nossas rotas

app.get('/', (req: Request, res: Response) =>{ // O parâmetro res define o que o aplicativo vai enviar pro user
  res.json({message: "Tudo funcionando!"})     // O parâmetro req define o que o user vai enviar pro aplicativo
});                                            // Aquele '/' serve como uma página inicial (localhost:XXXX'/aqui')

app.listen(3000, () => {
  console.log("Servidor rodando em https://localhost:3000")} // A partir daqui estou usando Insomnia
); 