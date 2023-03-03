/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonUtils } from '../../commons/utils/common.utils';
import { DateUtils } from '../../commons/utils/date.utils';
import { AccountWithoutPasswordDTO } from '../../models/dto/account-without-password.dto';
import { AccountDTO } from '../../models/dto/account.dto';
import { RegisterDTO } from '../../models/dto/register.dto';
import { Account } from '../../models/entites/account.entity';
import { Repository } from 'typeorm';
import { RoleGroupService } from '../role-group/role-group.service';
import { RoleService } from '../role/role.service';
import { UserService } from '../user/user.service';
import { User } from '../../models/entites/user.entity';
import { RoleGroup } from '../../models/entites/role-group.entity';
import { hash } from '../../commons/utils/password.utils';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    private roleGroupService: RoleGroupService,
    private userService: UserService,
    private roleService: RoleService,
  ) {}

  async getAll(): Promise<AccountWithoutPasswordDTO[]> {
    let results = await this.accountRepository.find();
    const accounts: AccountWithoutPasswordDTO[] = [];

    results.map(async (d) => {
      let { password, ...info } = d;
      let roles: string[] = await this.roleGroupService.getRoleIdsByUserId(
        d.id,
      );
      let account = new AccountWithoutPasswordDTO(info);

      // roles.map(role => account.role_ids.push(role));

      account.role_ids = roles;
      accounts.push(account);
    });

    return accounts;
  }

  async getOneById(id: string): Promise<AccountDTO> {
    const result = await this.accountRepository.findOneBy({ id });
    let roles: string[] = await this.roleGroupService.getRoleIdsByUserId(
      result.id,
    );

    let account = new AccountDTO(result);
    account.role_ids = roles;

    return account;
  }

  async getOneByUsername(username: string): Promise<AccountDTO> {
    const result = await this.accountRepository.findOneBy({ username });
    let roles: string[] = await this.roleGroupService.getRoleIdsByUserId(
      result.id,
    );

    let account = new AccountDTO(result);
    account.role_ids = roles;

    return account;
  }

  async getOneWithoutPassword(id: string): Promise<AccountWithoutPasswordDTO> {
    const result = await this.accountRepository.findOneBy({ id });
    let { password, ...info } = result;
    let roles: string[] = await this.roleGroupService.getRoleIdsByUserId(
      result.id,
    );

    let account = new AccountWithoutPasswordDTO(info);
    account.role_ids = roles;

    return account;
  }

  async create(input: Account): Promise<Account> {
    const account = this.accountRepository.create(input);
    return await this.accountRepository.save(account);
  }

  async createAdminAccount(input: RegisterDTO): Promise<boolean> {
    const id: any = {
      userId: CommonUtils.generateID('USER_ID_'),
      accountId: CommonUtils.generateID('ACCOUNT_ID_'),
      roleGroupId: CommonUtils.generateID('ROLE_GROUP_ID_'),
    };

    const roleId: string = (await this.roleService.getOneByName('ADMIN')).id;

    const account: Account = {
      id: id.accountId,
      created_date: DateUtils.getToday(),
      modified_date: DateUtils.getToday(),
      last_logged_in_date: DateUtils.getToday(),
      username: input.username,
      password: hash(input.password),
      status: 1,
      user_id: id.userId,
    };

    const user: User = {
      id: id.userId,
      full_name: input.full_name,
      address: input.address,
      phone_number: input.phone_number,
      email: input.email,
      account_id: id.accountId,
    };

    const roleGroup: RoleGroup = {
      id: id.roleGroupId,
      account_id: id.accountId,
      role_id: roleId,
    };

    await this.create(account);
    await this.userService.create(user);
    await this.roleGroupService.create(roleGroup);

    return true;
  }

  async createUserAccount(input: RegisterDTO): Promise<boolean> {
    return true;
  }
}
