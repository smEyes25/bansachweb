import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonUtils } from 'src/commons/utils/common.utils';
import { DateUtils } from 'src/commons/utils/date.utils';
import { Role } from 'src/models/class/role.class';
import { RoleEntity } from 'src/models/entites/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRespository: Repository<Role>,
  ) {}

  getAll(): Promise<Role[]> {
    return this.roleRespository.find();
  }

  getOneById(id: string): Promise<Role> {
    return this.roleRespository.findOneBy({ id });
  }

  getOneByName(name: string): Promise<Role> {
    return this.roleRespository.findOneBy({ name });
  }

  async create(name: string): Promise<Role> {
    const role: Role = this.roleRespository.create({
      id: CommonUtils.generateID('ROLE_ID_'),
      name,
      created_date: DateUtils.getToday(),
      modified_date: null,
    });

    return await this.roleRespository.save(role);
  }
}
