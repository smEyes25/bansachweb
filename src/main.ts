import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { createServer } from 'https';

async function bootstrap() {
  const app: any = await NestFactory.create(AppModule);

  // const pkFile = fs.readFileSync(
  //   'D://Workspace/API/ban_sach_api_test/src/certificate/private.key',
  // );
  // const ctFile = fs.readFileSync(
  //   'D://Workspace/API/ban_sach_api_test/src/certificate/certificate.crt',
  // );

  // const httpsOptions: any = {
  //   key: pkFile,
  //   cert: ctFile,
  // };

  // const server: any = createServer(
  //   httpsOptions,
  //   app.getHttpAdapter().getInstance(),
  // );
  await app.listen(3000);
}
bootstrap();
