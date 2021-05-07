import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { join } from 'path';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import * as dotenv from 'dotenv';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  dotenv.config();
  const app: NestExpressApplication = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    },
  });

  app.use(morgan('dev'));
  app.use('/images', express.static(join(__dirname, '..', '/images')));

  await app.listen(8091);
}
bootstrap();
