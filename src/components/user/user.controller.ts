/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { User } from 'src/models/entites/user.entity';
import { UserService } from './user.service';

@Controller('/user')
export class UserInfoController {
  constructor(private userService: UserService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
}
