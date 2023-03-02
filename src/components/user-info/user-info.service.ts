/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfo } from '../../models/class/user-info.class';
import { UserInfoEntity } from '../../models/entites/user-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectRepository(UserInfoEntity)
    private userInfoRepository: Repository<UserInfo>,
  ) {}

  getAll(): Promise<UserInfo[]> {
    return this.userInfoRepository.find();
  }

  getOne(id: string): Promise<UserInfo> {
    return this.userInfoRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.userInfoRepository.delete(id);
  }

  async create(input: UserInfo): Promise<UserInfo> {
    const userInfo: UserInfo = this.userInfoRepository.create(input);
    return await this.userInfoRepository.save(userInfo);
  }
}
