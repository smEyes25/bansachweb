/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonUtils } from 'src/commons/utils/common.utils';
import { DateUtils } from 'src/commons/utils/date.utils';
import { hash, checkPassword } from 'src/commons/utils/password.utils';
import { Account } from 'src/models/class/account.class';
import { RoleGroup } from 'src/models/class/role-group.class';
import { UserInfo } from 'src/models/class/user-info.class';
import { AccountWithoutPasswordDTO } from 'src/models/dto/account-without-password.dto';
import { AccountDTO } from 'src/models/dto/account.dto';
import { RegisterDTO } from 'src/models/dto/register.dto';
import { AccountEntity } from 'src/models/entites/account.entity';
import { Repository } from 'typeorm';
import { RoleGroupService } from '../role-group/role-group.service';
import { RoleService } from '../role/role.service';
import { UserInfoService } from '../user-info/user-info.service';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private accountRepository: Repository<Account>,
    private roleGroupService: RoleGroupService,
    private userInfoService: UserInfoService,
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
      userInfoId: CommonUtils.generateID('USER_ID_'),
      accountId: CommonUtils.generateID('ACCOUNT_ID_'),
      roleGroupId: CommonUtils.generateID('ROLE_GROUP_ID_'),
    };

    const roleId: string = (await this.roleService.getOneByName('ADMIN')).id;

    const account: Account = {
      id: id.accountId,
      created_date: DateUtils.getToday(),
      modified_date: null,
      last_logged_in_date: null,
      username: input.username,
      password: hash(input.password),
      status: 1,
      user_info_id: id.userInfoId,
    };

    const userInfo: UserInfo = {
      id: id.userInfoId,
      full_name: input.fullname,
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
    await this.userInfoService.create(userInfo);
    await this.roleGroupService.create(roleGroup);

    return true;
  }

  async createUserAccount(input: RegisterDTO): Promise<boolean> {
    return true;
  }
}
