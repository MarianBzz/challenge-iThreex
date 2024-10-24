import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5434,
});

const seedDatabase = async () => {
  const employees = [
    {
      name: 'Juan Pérez',
      age: 32,
      area: 'Desarrollo',
      seniority: 5,
      phone: '3512345678',
    },
    {
      name: 'María González',
      age: 28,
      area: 'Recursos Humanos',
      seniority: 3,
      phone: '3512345679',
    },
    {
      name: 'Carlos López',
      age: 40,
      area: 'Finanzas',
      seniority: 10,
      phone: '3512345680',
    },
    {
      name: 'Laura Fernández',
      age: 25,
      area: 'Marketing',
      seniority: 2,
      phone: '3512345681',
    },
  ];

  try {
    for (const employee of employees) {
      await pool.query(
        'INSERT INTO employees (name, age, area, seniority, phone) VALUES ($1, $2, $3, $4, $5)',
        [
          employee.name,
          employee.age,
          employee.area,
          employee.seniority,
          employee.phone,
        ]
      );
    }
    console.log('Base de datos poblada con éxito!');
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
  } finally {
    await pool.end(); // Cerrar la conexión
  }
};

seedDatabase();
