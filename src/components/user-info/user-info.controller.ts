/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UserInfo } from '../../models/class/user-info.class';
import { UserInfoService } from '../../components/user-info/user-info.service';

@Controller('/user')
export class UserInfoController {
  constructor(private userInfoService: UserInfoService) {}

  @Get()
  getAll(): Promise<UserInfo[]> {
    return this.userInfoService.getAll();
  }
}
