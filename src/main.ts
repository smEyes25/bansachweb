import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://bookstore-ten-gamma.vercel.app',
      'https://bookstore-ten-gamma.vercel.app/login',
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
