import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordUtils } from 'src/commons/utils/password.utils';
import { AccountService } from 'src/components/account/account.service';
import { AccountWithoutPasswordDTO } from 'src/models/dto/account-without-password.dto';
import { RegisterDTO } from 'src/models/dto/register.dto';

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

    const isPassword = PasswordUtils.checkPassword(password, account.password);

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
