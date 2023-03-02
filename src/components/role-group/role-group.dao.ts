import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleGroupDAO {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  async getRoleIdsByUserId(account_id: string): Promise<string[]> {
    return await this.dataSource.query(
      'select role_id from role_group where account_id = ?',
      [account_id],
    );
  }
}
