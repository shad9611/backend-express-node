import { Sequelize } from 'sequelize-typescript';
import * as path from 'path';
import config from '../config/config.json'
const env = process.env.NODE_ENV || 'development';

interface DbConfig {
  username: string;
  password: string | undefined;
  database: string;
  host: string;
  dialect: 'mysql'
}

const dbConfig: DbConfig = (config as any)[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  models: [path.resolve(__dirname, '../models')],
});

export default sequelize;
