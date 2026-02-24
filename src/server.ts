import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import pool from './db.js';
import { Boxeador } from './types.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>API Ranking de Boxeo</title>
      <style>
        body { font-family: sans-serif; margin: 40px; background-color: #f4f4f9; color: #333; }
        h1 { color: #d32f2f; }
        .endpoint { background-color: #fff; padding: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
      </style>
    </head>
    <body>
      <h1>API de Ranking de Boxeadores</h1>
      <p>Bienvenido a la API del top de boxeadores profesionales</p>
      <div class="endpoint">
        <h3>Endpoints Disponibles:</h3>
        <ul>
          <li><strong>GET <a href="/api/datos">/api/datos</a></strong> - Devuelve la lista completa de boxeadores en JSON</li>
        </ul>
      </div>
    </body>
    </html>
  `;
    res.send(html);
});

app.get('/api/datos', async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query<Boxeador[]>('SELECT * FROM boxeadores ORDER BY rating DESC');
        res.json(rows);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: 'Error del servidor al obtener datos', detalle: error.message });
        } else {
            res.status(500).json({ error: 'Error desconocido del servidor' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
