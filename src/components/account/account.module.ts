/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from 'src/models/entites/account.entity';
import { RoleGroupModule } from '../role-group/role-group.module';
import { RoleModule } from '../role/role.module';
import { UserInfoModule } from '../user-info/user-info.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity]),
    RoleGroupModule,
    UserInfoModule,
    RoleModule,
  ],
  exports: [TypeOrmModule, AccountService],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
