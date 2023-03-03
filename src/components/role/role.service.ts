import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonUtils } from '../../commons/utils/common.utils';
import { DateUtils } from '../../commons/utils/date.utils';
import { Role } from '../../models/entites/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
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
      modified_date: DateUtils.getToday(),
    });

    return await this.roleRespository.save(role);
  }
}
