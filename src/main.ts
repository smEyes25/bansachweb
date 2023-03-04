import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: 'https://bookstore-ten-gamma.vercel.app',
  //   methods: ['GET', 'PUT', 'POST', 'DELETE', 'UPDATE'],
  //   credentials: true,
  //   allowedHeaders: ['X-Requested-With', 'Content-Type', 'Authorization'],
  // });
  await app.listen(3000);
}
bootstrap();
