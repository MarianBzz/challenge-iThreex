import { DataTypes } from 'sequelize';
import { sequelize } from './index';

const Empleado = sequelize.define('Employee', {
  nombreCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  antigüedad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Empleado;
