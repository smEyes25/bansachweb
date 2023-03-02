import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { createServer } from 'https';

async function bootstrap() {
  const app: any = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();
