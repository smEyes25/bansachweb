import { Response } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.use((req: any, res: any) => {
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
  });

  await app.listen(3000);
}
bootstrap();
