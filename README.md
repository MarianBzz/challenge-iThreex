# EmplyNet

Aplicación de gestión de empleados que permite organizar y visualizar información de manera eficiente. Diseñada para facilitar el acceso a datos de empleados, incluyendo nombre, edad, área y antigüedad, con una interfaz intuitiva y responsive. (Test Ithreex)

## Requisitos

- Node.js
- PostgreSQL

## Configuración

1. **Clonar el repositorio**:

   ```bash
   git clone <https://github.com/MarianBzz/challenge-iThreex.git>
   cd <challenge-iThreex>

   ```

2. **Instalar dependencias**:
   Para el backend:
   cd backend
   npm install

Para el frontend:
cd ../frontend
npm install

3. **Crear la base de datos en PostgreSQL:**:
   Abre tu terminal de PostgreSQL y ejecuta el siguiente comando para crear la base de datos que usarás en la aplicación:
   CREATE DATABASE <nombre_de_tu_base_de_datos>;
   Asegúrate de reemplazar <nombre_de_tu_base_de_datos> con el nombre que desees para tu base de datos.

4. **Configurar variables de entorno:**:
   Crea un archivo .env en la raíz del directorio del backend y agrega las siguientes variables, asegurándote de utilizar los datos de la base de datos que has creado en PostgreSQL:

DB_NAME=<nombre_de_tu_base_de_datos>
DB_USER=<tu_usuario_de_postgres>
DB_PASSWORD=<tu_contraseña_de_postgres>
DB_HOST=localhost
DB_PORT=<puerto>

5. **Sembrar la base de datos:**:
   Ejecuta el siguiente comando en el directorio del backend para sembrar la base de datos con datos iniciales:
   npx ts-node src/seed.ts

6. **Iniciar el servidor:**:
   Desde el directorio del backend, inicia el servidor:
   npm start

7. **Iniciar el frontend:**:
   Desde el directorio del frontend, inicia el cliente:
   npm run dev

Notas
Asegúrate de que PostgreSQL esté en ejecución y que la base de datos especificada exista.
Puedes modificar los valores en el archivo .env según sea necesario para tu entorno.
