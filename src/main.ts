import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import appConfig from 'config/appConfig';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = appConfig().port || 3000;
  await app.listen(port);
  console.log(`service is listening on http://localhost:${port}`);
}
bootstrap();
