import { Sequelize } from 'sequelize';

// database setup
export const db = new Sequelize('dev-db', 'postgres', 'password', {
  host: 'postgres',
  dialect: 'postgres',
});
