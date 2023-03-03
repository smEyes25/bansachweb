import { Controller, Get } from '@nestjs/common';
import { RoleGroup } from 'src/models/entites/role-group.entity';
import { RoleGroupService } from '../../components/role-group/role-group.service';

@Controller('/role_group')
export class RoleGroupController {
  constructor(private roleGroupService: RoleGroupService) {}

  @Get()
  getAll(): Promise<RoleGroup[]> {
    return this.roleGroupService.getAll();
  }
}
