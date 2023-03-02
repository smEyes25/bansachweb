import { Controller, Get } from '@nestjs/common';
import { RoleService } from '../../components/role/role.service';

@Controller('/role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  getAll() {
    return this.roleService.getAll();
  }
}
