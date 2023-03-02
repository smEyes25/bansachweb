import { Controller, Get } from '@nestjs/common';
import { RoleGroup } from 'src/models/class/role-group.class';
import { RoleGroupService } from './role-group.service';

@Controller('/role_group')
export class RoleGroupController {
  constructor(private roleGroupService: RoleGroupService) {}

  @Get()
  getAll(): Promise<RoleGroup[]> {
    return this.roleGroupService.getAll();
  }
}
