import { sequelize } from './models';
import Employee from './models/Employee';

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Elimina y vuelve a crear tablas
    await Employee.bulkCreate([
      // Área: Tecnología
      {
        nombreCompleto: 'Juan Pérez',
        edad: 30,
        area: 'Tecnología',
        antiguedad: 5,
        telefono: '123456789',
      },
      {
        nombreCompleto: 'María López',
        edad: 28,
        area: 'Tecnología',
        antiguedad: 3,
        telefono: '987654321',
      },
      {
        nombreCompleto: 'Carlos García',
        edad: 35,
        area: 'Tecnología',
        antiguedad: 6,
        telefono: '456789123',
      },
      {
        nombreCompleto: 'Lucía Rodríguez',
        edad: 26,
        area: 'Tecnología',
        antiguedad: 2,
        telefono: '321654987',
      },
      {
        nombreCompleto: 'Fernando Díaz',
        edad: 33,
        area: 'Tecnología',
        antiguedad: 4,
        telefono: '258147963',
      },

      // Área: Recursos Humanos
      {
        nombreCompleto: 'Ana Martínez',
        edad: 32,
        area: 'Recursos Humanos',
        antiguedad: 4,
        telefono: '321654987',
      },
      {
        nombreCompleto: 'José Fernández',
        edad: 40,
        area: 'Recursos Humanos',
        antiguedad: 10,
        telefono: '654321789',
      },
      {
        nombreCompleto: 'Laura Torres',
        edad: 29,
        area: 'Recursos Humanos',
        antiguedad: 2,
        telefono: '789123456',
      },
      {
        nombreCompleto: 'Ricardo Morales',
        edad: 37,
        area: 'Recursos Humanos',
        antiguedad: 5,
        telefono: '654789123',
      },
      {
        nombreCompleto: 'Patricia Salas',
        edad: 31,
        area: 'Recursos Humanos',
        antiguedad: 1,
        telefono: '147258963',
      },

      // Área: Finanzas
      {
        nombreCompleto: 'Pedro Sánchez',
        edad: 45,
        area: 'Finanzas',
        antiguedad: 12,
        telefono: '147258369',
      },
      {
        nombreCompleto: 'Lucía Gómez',
        edad: 34,
        area: 'Finanzas',
        antiguedad: 7,
        telefono: '258369147',
      },
      {
        nombreCompleto: 'Sofía Ramírez',
        edad: 38,
        area: 'Finanzas',
        antiguedad: 8,
        telefono: '369147258',
      },

      // Área: Marketing
      {
        nombreCompleto: 'Daniela Morales',
        edad: 27,
        area: 'Marketing',
        antiguedad: 1,
        telefono: '951753486',
      },
      {
        nombreCompleto: 'Javier Castro',
        edad: 31,
        area: 'Marketing',
        antiguedad: 5,
        telefono: '753159864',
      },
      {
        nombreCompleto: 'Elena Ruiz',
        edad: 29,
        area: 'Marketing',
        antiguedad: 3,
        telefono: '159753846',
      },
      {
        nombreCompleto: 'Patricia Herrera',
        edad: 26,
        area: 'Marketing',
        antiguedad: 4,
        telefono: '369258147',
      },
      {
        nombreCompleto: 'Clara Medina',
        edad: 28,
        area: 'Marketing',
        antiguedad: 6,
        telefono: '147159753',
      },

      // Área: Ventas
      {
        nombreCompleto: 'Diego Romero',
        edad: 33,
        area: 'Ventas',
        antiguedad: 4,
        telefono: '753951468',
      },
      {
        nombreCompleto: 'Fernando Díaz',
        edad: 39,
        area: 'Ventas',
        antiguedad: 9,
        telefono: '951258463',
      },
      {
        nombreCompleto: 'María García',
        edad: 41,
        area: 'Ventas',
        antiguedad: 6,
        telefono: '951753486',
      },
      {
        nombreCompleto: 'Carlos Pérez',
        edad: 30,
        area: 'Ventas',
        antiguedad: 2,
        telefono: '258963147',
      },
      {
        nombreCompleto: 'Patricia Rojas',
        edad: 36,
        area: 'Ventas',
        antiguedad: 8,
        telefono: '654321987',
      },

      // Área: Operaciones
      {
        nombreCompleto: 'Patricia Herrera',
        edad: 41,
        area: 'Operaciones',
        antiguedad: 11,
        telefono: '456123789',
      },
      {
        nombreCompleto: 'Luis Mendoza',
        edad: 36,
        area: 'Operaciones',
        antiguedad: 7,
        telefono: '321456987',
      },
      {
        nombreCompleto: 'Teresa López',
        edad: 28,
        area: 'Operaciones',
        antiguedad: 3,
        telefono: '789456123',
      },
      {
        nombreCompleto: 'Roberto Martínez',
        edad: 45,
        area: 'Operaciones',
        antiguedad: 10,
        telefono: '147852963',
      },
      {
        nombreCompleto: 'María Fernández',
        edad: 33,
        area: 'Operaciones',
        antiguedad: 5,
        telefono: '789654321',
      },

      // Área: Investigación y Desarrollo
      {
        nombreCompleto: 'Ricardo Álvarez',
        edad: 37,
        area: 'Investigación y Desarrollo',
        antiguedad: 6,
        telefono: '654789123',
      },
      {
        nombreCompleto: 'Valeria Vargas',
        edad: 34,
        area: 'Investigación y Desarrollo',
        antiguedad: 4,
        telefono: '789321654',
      },
      {
        nombreCompleto: 'Gustavo Sánchez',
        edad: 42,
        area: 'Investigación y Desarrollo',
        antiguedad: 10,
        telefono: '258147963',
      },
      {
        nombreCompleto: 'Juan Carlos Pérez',
        edad: 30,
        area: 'Investigación y Desarrollo',
        antiguedad: 2,
        telefono: '951753852',
      },

      // Área: Legal
      {
        nombreCompleto: 'Silvia Martínez',
        edad: 30,
        area: 'Legal',
        antiguedad: 5,
        telefono: '147369258',
      },
      {
        nombreCompleto: 'Andrés Torres',
        edad: 45,
        area: 'Legal',
        antiguedad: 12,
        telefono: '369258147',
      },

      // Área: Atención al Cliente
      {
        nombreCompleto: 'Esteban Guzmán',
        edad: 32,
        area: 'Atención al Cliente',
        antiguedad: 4,
        telefono: '951789654',
      },
      {
        nombreCompleto: 'Patricia Salas',
        edad: 27,
        area: 'Atención al Cliente',
        antiguedad: 1,
        telefono: '753852741',
      },
      {
        nombreCompleto: 'Rafael Castro',
        edad: 39,
        area: 'Atención al Cliente',
        antiguedad: 8,
        telefono: '852741963',
      },
      {
        nombreCompleto: 'Sandra López',
        edad: 29,
        area: 'Atención al Cliente',
        antiguedad: 3,
        telefono: '963258741',
      },
      {
        nombreCompleto: 'Mariano Rojas',
        edad: 38,
        area: 'Atención al Cliente',
        antiguedad: 6,
        telefono: '951654789',
      },

      // Área: Proyectos
      {
        nombreCompleto: 'Natalia Paredes',
        edad: 29,
        area: 'Proyectos',
        antiguedad: 3,
        telefono: '951852963',
      },
      {
        nombreCompleto: 'Jorge Nieto',
        edad: 31,
        area: 'Proyectos',
        antiguedad: 5,
        telefono: '147258369',
      },
      {
        nombreCompleto: 'Cecilia Martínez',
        edad: 28,
        area: 'Proyectos',
        antiguedad: 4,
        telefono: '258369147',
      },
      {
        nombreCompleto: 'Victor Hugo',
        edad: 40,
        area: 'Proyectos',
        antiguedad: 10,
        telefono: '369258147',
      },

      // Área: Desarrollo de Negocios
      {
        nombreCompleto: 'Elena Morales',
        edad: 36,
        area: 'Desarrollo de Negocios',
        antiguedad: 8,
        telefono: '753159864',
      },
      {
        nombreCompleto: 'Adriana Quiroz',
        edad: 34,
        area: 'Desarrollo de Negocios',
        antiguedad: 9,
        telefono: '951753486',
      },
      {
        nombreCompleto: 'Alberto Rodríguez',
        edad: 38,
        area: 'Desarrollo de Negocios',
        antiguedad: 12,
        telefono: '369258147',
      },

      // Área: Capacitación
      {
        nombreCompleto: 'Fernando Castro',
        edad: 32,
        area: 'Capacitación',
        antiguedad: 6,
        telefono: '258147963',
      },
      {
        nombreCompleto: 'Carla Gómez',
        edad: 30,
        area: 'Capacitación',
        antiguedad: 7,
        telefono: '951753258',
      },

      // Área: Logística
      {
        nombreCompleto: 'Salvador Jiménez',
        edad: 29,
        area: 'Logística',
        antiguedad: 4,
        telefono: '753951468',
      },
      {
        nombreCompleto: 'Inés Soto',
        edad: 32,
        area: 'Logística',
        antiguedad: 5,
        telefono: '951258369',
      },
    ]);

    console.log('Base de datos sembrada con éxito');
  } catch (error) {
    console.error('Error al sembrar la base de datos:', error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();
