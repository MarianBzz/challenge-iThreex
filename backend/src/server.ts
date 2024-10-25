import express from 'express';
import cors from 'cors';
import { sequelize } from './models'; // Conexión a la DB
import Employee from './models/Employee'; // Modelo de empleados

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Ruta para obtener todos los empleados
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll(); // Traer todos los empleados
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener empleados', error });
  }
});

// Iniciar el servidor
app.listen(port, async () => {
  try {
    await sequelize.sync(); // Sincroniza la base de datos
    console.log(`Servidor escuchando en http://localhost:${port}`);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
});
