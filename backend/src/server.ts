import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import cors from 'cors';

// Configuración de Express
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5434,
});

// Endpoint para obtener todos los empleados
app.get('/api/empleados', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM empleados');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener empleados:', err);
    res.status(500).json({ error: 'Error al obtener los empleados' });
  }
});

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
