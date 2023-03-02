import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleGroupEntity } from 'models/entites/role-group.entity';
import { RoleGroupController } from 'components/role-group/role-group.controller';
import { RoleGroupDAO } from 'components/role-group/role-group.dao';
import { RoleGroupService } from 'components/role-group/role-group.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleGroupEntity])],
  providers: [RoleGroupService, RoleGroupDAO],
  controllers: [RoleGroupController],
  exports: [RoleGroupService],
})
export class RoleGroupModule {}
