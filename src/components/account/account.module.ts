/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../../models/entites/account.entity';
import { RoleGroupModule } from '../../components/role-group/role-group.module';
import { RoleModule } from '../../components/role/role.module';
import { UserInfoModule } from '../user/user.module';
import { AccountController } from '../../components/account/account.controller';
import { AccountService } from '../../components/account/account.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    RoleGroupModule,
    UserInfoModule,
    RoleModule,
  ],
  exports: [TypeOrmModule, AccountService],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
