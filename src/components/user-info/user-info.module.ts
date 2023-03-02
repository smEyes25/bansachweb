/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoEntity } from 'src/models/entites/user-info.entity';
import { UserInfoController } from './user-info.controller';
import { UserInfoService } from './user-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfoEntity])],
  exports: [TypeOrmModule, UserInfoService],
  providers: [UserInfoService],
  controllers: [UserInfoController],
})
export class UserInfoModule {}
