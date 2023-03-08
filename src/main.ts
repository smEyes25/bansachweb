import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors);

  // app.enableCors({
  //   origin: true,
  //   credentials: true,
  // });

  await app.listen(3000);
}
bootstrap();
