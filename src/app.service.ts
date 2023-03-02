import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AccountWithoutPasswordDTO } from './models/dto/account-without-password.dto';
import { LoginDTO } from './models/dto/login.dto';
import { RegisterDTO } from './models/dto/register.dto';

@Injectable()
export class AppService {
  constructor(private authService: AuthService) {}

  async login(input: LoginDTO): Promise<any> {
    const user: AccountWithoutPasswordDTO = await this.authService.validateUser(
      input.username,
      input.password,
    );

    return this.authService.login(user);
  }

  async registerAdminAccount(input: RegisterDTO) {
    return this.authService.register(input);
  }
}
