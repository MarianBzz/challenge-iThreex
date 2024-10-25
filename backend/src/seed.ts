import { sequelize } from './models';
import Employee from './models/Employee'; // Asegúrate de que el nombre del modelo esté en español

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Elimina y vuelve a crear tablas
    await Employee.bulkCreate([
      // Área: Tecnología
      {
        nombreCompleto: 'Juan Pérez',
        edad: 30,
        area: 'Tecnología',
        antigüedad: 5,
        telefono: '123456789',
      },
      {
        nombreCompleto: 'María López',
        edad: 28,
        area: 'Tecnología',
        antigüedad: 3,
        telefono: '987654321',
      },
      {
        nombreCompleto: 'Carlos García',
        edad: 35,
        area: 'Tecnología',
        antigüedad: 6,
        telefono: '456789123',
      },
      {
        nombreCompleto: 'Lucía Rodríguez',
        edad: 26,
        area: 'Tecnología',
        antigüedad: 2,
        telefono: '321654987',
      },

      // Área: Recursos Humanos
      {
        nombreCompleto: 'Ana Martínez',
        edad: 32,
        area: 'Recursos Humanos',
        antigüedad: 4,
        telefono: '321654987',
      },
      {
        nombreCompleto: 'José Fernández',
        edad: 40,
        area: 'Recursos Humanos',
        antigüedad: 10,
        telefono: '654321789',
      },
      {
        nombreCompleto: 'Laura Torres',
        edad: 29,
        area: 'Recursos Humanos',
        antigüedad: 2,
        telefono: '789123456',
      },
      {
        nombreCompleto: 'Ricardo Morales',
        edad: 37,
        area: 'Recursos Humanos',
        antigüedad: 5,
        telefono: '654789123',
      },
      {
        nombreCompleto: 'Patricia Salas',
        edad: 31,
        area: 'Recursos Humanos',
        antigüedad: 1,
        telefono: '147258963',
      },

      // Área: Finanzas
      {
        nombreCompleto: 'Pedro Sánchez',
        edad: 45,
        area: 'Finanzas',
        antigüedad: 12,
        telefono: '147258369',
      },
      {
        nombreCompleto: 'Lucía Gómez',
        edad: 34,
        area: 'Finanzas',
        antigüedad: 7,
        telefono: '258369147',
      },
      {
        nombreCompleto: 'Sofía Ramírez',
        edad: 38,
        area: 'Finanzas',
        antigüedad: 8,
        telefono: '369147258',
      },

      // Área: Marketing
      {
        nombreCompleto: 'Daniela Morales',
        edad: 27,
        area: 'Marketing',
        antigüedad: 1,
        telefono: '951753486',
      },
      {
        nombreCompleto: 'Javier Castro',
        edad: 31,
        area: 'Marketing',
        antigüedad: 5,
        telefono: '753159864',
      },
      {
        nombreCompleto: 'Elena Ruiz',
        edad: 29,
        area: 'Marketing',
        antigüedad: 3,
        telefono: '159753846',
      },
      {
        nombreCompleto: 'Patricia Herrera',
        edad: 26,
        area: 'Marketing',
        antigüedad: 4,
        telefono: '369258147',
      },
      {
        nombreCompleto: 'Fernando Díaz',
        edad: 33,
        area: 'Marketing',
        antigüedad: 2,
        telefono: '258147963',
      },
      {
        nombreCompleto: 'Clara Medina',
        edad: 28,
        area: 'Marketing',
        antigüedad: 6,
        telefono: '147159753',
      },

      // Área: Ventas
      {
        nombreCompleto: 'Diego Romero',
        edad: 33,
        area: 'Ventas',
        antigüedad: 4,
        telefono: '753951468',
      },
      {
        nombreCompleto: 'Fernando Díaz',
        edad: 39,
        area: 'Ventas',
        antigüedad: 9,
        telefono: '951258463',
      },
      {
        nombreCompleto: 'María García',
        edad: 41,
        area: 'Ventas',
        antigüedad: 6,
        telefono: '951753486',
      },

      // Área: Operaciones
      {
        nombreCompleto: 'Patricia Herrera',
        edad: 41,
        area: 'Operaciones',
        antigüedad: 11,
        telefono: '456123789',
      },
      {
        nombreCompleto: 'Luis Mendoza',
        edad: 36,
        area: 'Operaciones',
        antigüedad: 7,
        telefono: '321456987',
      },
      {
        nombreCompleto: 'Teresa López',
        edad: 28,
        area: 'Operaciones',
        antigüedad: 3,
        telefono: '789456123',
      },

      // Área: Investigación y Desarrollo
      {
        nombreCompleto: 'Ricardo Álvarez',
        edad: 37,
        area: 'Investigación y Desarrollo',
        antigüedad: 6,
        telefono: '654789123',
      },
      {
        nombreCompleto: 'Valeria Vargas',
        edad: 34,
        area: 'Investigación y Desarrollo',
        antigüedad: 4,
        telefono: '789321654',
      },
      {
        nombreCompleto: 'Gustavo Sánchez',
        edad: 42,
        area: 'Investigación y Desarrollo',
        antigüedad: 10,
        telefono: '258147963',
      },
      {
        nombreCompleto: 'Juan Carlos Pérez',
        edad: 30,
        area: 'Investigación y Desarrollo',
        antigüedad: 2,
        telefono: '951753852',
      },

      // Área: Legal
      {
        nombreCompleto: 'Silvia Martínez',
        edad: 30,
        area: 'Legal',
        antigüedad: 5,
        telefono: '147369258',
      },
      {
        nombreCompleto: 'Andrés Torres',
        edad: 45,
        area: 'Legal',
        antigüedad: 12,
        telefono: '369258147',
      },

      // Área: Atención al Cliente
      {
        nombreCompleto: 'Esteban Guzmán',
        edad: 32,
        area: 'Atención al Cliente',
        antigüedad: 4,
        telefono: '951789654',
      },
      {
        nombreCompleto: 'Patricia Salas',
        edad: 27,
        area: 'Atención al Cliente',
        antigüedad: 1,
        telefono: '753852741',
      },
      {
        nombreCompleto: 'Rafael Castro',
        edad: 39,
        area: 'Atención al Cliente',
        antigüedad: 8,
        telefono: '852741963',
      },
      {
        nombreCompleto: 'Sandra López',
        edad: 29,
        area: 'Atención al Cliente',
        antigüedad: 3,
        telefono: '963258741',
      },
      {
        nombreCompleto: 'Mariano Rojas',
        edad: 38,
        area: 'Atención al Cliente',
        antigüedad: 6,
        telefono: '951654789',
      },
    ]);

    console.log('Base de datos poblada con éxito!');
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
  } finally {
    await sequelize.close(); // Asegúrate de cerrar la conexión correctamente
  }
}

seedDatabase();
