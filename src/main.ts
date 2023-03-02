import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function bootstrap() {
  const app: any = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();
