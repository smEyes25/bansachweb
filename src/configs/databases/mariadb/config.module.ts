/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from 'src/models/entites/account.entity';
import { RoleEntity } from 'src/models/entites/role.entity';
import { RoleGroupEntity } from 'src/models/entites/role-group.entity';
import { UserInfoEntity } from 'src/models/entites/user-info.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.77.162.18',
      port: 3306,
      username: 'longn487_bansach',
      password: 'chanlong123',
      database: 'longn487_bansach',
      entities: [AccountEntity, UserInfoEntity, RoleEntity, RoleGroupEntity],
      autoLoadEntities: true,
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
