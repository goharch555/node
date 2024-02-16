import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import appConfig from 'config/appConfig';
require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: appConfig().dbhost,
  port: appConfig().dbport,
  username: appConfig().dbusername,
  password: appConfig().dbpassword,
  database: appConfig().database,
  entities: ['dist/**/**.entity{.ts,.js}'],
  synchronize: true,
  migrationsRun: false,
  logging: true,
  migrations: [__dirname + '/migrations/*.ts'],
};
