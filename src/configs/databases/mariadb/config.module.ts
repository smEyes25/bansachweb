/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../../../models/entites/account.entity';
import { Role } from '../../../models/entites/role.entity';
import { RoleGroup } from '../../../models/entites/role-group.entity';
import { User } from '../../../models/entites/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '185.42.117.115',
      port: 3306,
      username: 'uatfmjvhjdn7ipnq',
      password: 'rcxcTuj5e2WLBTg9lEcW',
      database: 'bhbnm9ytudrvjlxpd3d7',
      entities: [Account, User, Role, RoleGroup],
      autoLoadEntities: true,
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'mysql-113449-0.cloudclusters.net',
    //   port: 16142,
    //   username: 'admin',
    //   password: 'wm1hMxbj',
    //   database: 'ban_sach',
    //   entities: [AccountEntity, UserInfoEntity, RoleEntity, RoleGroupEntity],
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
  ],
})
export class ConfigModule {}
