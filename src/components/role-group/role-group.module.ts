import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleGroupEntity } from 'src/models/entites/role-group.entity';
import { RoleGroupController } from './role-group.controller';
import { RoleGroupDAO } from './role-group.dao';
import { RoleGroupService } from './role-group.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleGroupEntity])],
  providers: [RoleGroupService, RoleGroupDAO],
  controllers: [RoleGroupController],
  exports: [RoleGroupService],
})
export class RoleGroupModule {}
