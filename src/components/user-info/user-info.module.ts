/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoEntity } from '../../models/entites/user-info.entity';
import { UserInfoController } from '../../components/user-info/user-info.controller';
import { UserInfoService } from '../../components/user-info/user-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfoEntity])],
  exports: [TypeOrmModule, UserInfoService],
  providers: [UserInfoService],
  controllers: [UserInfoController],
})
export class UserInfoModule {}
