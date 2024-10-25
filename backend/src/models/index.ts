import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres', 'postgres', 'password', {
  host: 'localhost',
  port: 5434,
  dialect: 'postgres',
});
