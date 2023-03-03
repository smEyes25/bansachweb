import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/components/account/account.service';

@Injectable()
export class AccountValidator {
  constructor(private accountService: AccountService) {}

  async validator(method: string, username: string): Promise<string[]> {
    const errors: string[] = [];

    let error: string = await this.checkUsernameIsExisted(username, method);
    if (error !== '') {
      errors.push(error);
    }

    return errors;
  }

  async checkUsernameIsExisted(
    username: string,
    method: string,
  ): Promise<string> {
    const account = await this.accountService.getOneByUsername(username);

    if (method === 'register' && account) {
      return 'Username is existed';
    } else if (method === 'login' && !account) {
      return 'Invalid username';
    } else {
      return '';
    }
  }
}
