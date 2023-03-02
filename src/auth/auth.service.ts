import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { checkPassword } from '../commons/utils/password.utils';
import { AccountService } from '../components/account/account.service';
import { AccountWithoutPasswordDTO } from '../models/dto/account-without-password.dto';
import { RegisterDTO } from '../models/dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<AccountWithoutPasswordDTO> {
    const account = await this.accountService.getOneByUsername(username);

    const isPassword = checkPassword(password, account.password);

    if (account && isPassword && account.status === 1) {
      const { password, ...info } = account;
      return info;
    }

    return null;
  }

  login(user: AccountWithoutPasswordDTO) {
    const payload = {
      user_id: user.id,
      username: user.username,
      role_ids: user.role_ids,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  register(user: RegisterDTO) {
    return this.accountService.createAdminAccount(user);
  }
}
