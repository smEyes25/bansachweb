import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://bookstore-ten-gamma.vercel.app',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
    allowedHeaders: 'X-Requested-With,content-type, Authorization',
  });
  await app.listen(3000);
}
bootstrap();
