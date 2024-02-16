import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import appConfig from 'config/appConfig';
const { ValidationPipe } = require('@nestjs/common');
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS and allow all origins
  app.enableCors({
    origin: '*',
  });
  app.useGlobalPipes(new ValidationPipe());

  const port = appConfig().port || 2443;
  await app.listen(port);
  console.log(`service is listening on http://localhost:${port}`);
}
bootstrap();
