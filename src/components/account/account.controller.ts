/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AccountWithoutPasswordDTO } from 'src/models/dto/account-without-password.dto';
import { AccountService } from './account.service';

@Controller('/account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  async getAll(): Promise<AccountWithoutPasswordDTO[]> {
    const results = await this.accountService.getAll();

    return results;
  }

  @Get('/:id')
  async getOneWithoutPassword(
    @Param('id') id: string,
  ): Promise<AccountWithoutPasswordDTO> {
    const result = await this.accountService.getOneWithoutPassword(id);

    return result;
  }
}
