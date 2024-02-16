import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env.PORT,
  dbhost: process.env.MYSQL_DB_HOST,
  dbport: Number(process.env.MYSQL_DB_PORT),
  dbusername: process.env.MYSQL_DB_USER,
  dbpassword: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB,
}));
