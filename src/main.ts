import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://bansachweb.vercel.app/v1/api/profile',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'UPDATE'],
    credentials: true,
    allowedHeaders: 'Access-Control-Allow-Origin',
  });
  await app.listen(3000);
}
bootstrap();
