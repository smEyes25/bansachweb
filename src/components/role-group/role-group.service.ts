import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleGroup } from 'models/class/role-group.class';
import { RoleGroupEntity } from 'models/entites/role-group.entity';
import { Repository } from 'typeorm';
import { RoleGroupDAO } from 'components/role-group/role-group.dao';

@Injectable()
export class RoleGroupService {
  constructor(
    @InjectRepository(RoleGroupEntity)
    private roleGroupRespository: Repository<RoleGroup>,
    private roleGroupDAO: RoleGroupDAO,
  ) {}

  getAll(): Promise<RoleGroup[]> {
    return this.roleGroupRespository.find();
  }

  getOne(id: string): Promise<RoleGroup> {
    return this.roleGroupRespository.findOneBy({ id });
  }

  async getRoleIdsByUserId(id: string): Promise<string[]> {
    const roles: string[] = await this.roleGroupDAO.getRoleIdsByUserId(id);
    return roles;
  }

  async create(input: RoleGroup): Promise<RoleGroup> {
    const roleGroup: RoleGroup = this.roleGroupRespository.create(input);
    return await this.roleGroupRespository.save(roleGroup);
  }
}
