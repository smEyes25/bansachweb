import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './components/account/account.module';
import { RoleModule } from './components/role/role.module';
import { RoleGroupModule } from './components/role-group/role-group.module';
import { UserInfoModule } from './components/user/user.module';
import { ConfigModule } from './configs/databases/mariadb/config.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    AccountModule,
    UserInfoModule,
    RoleModule,
    RoleGroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
