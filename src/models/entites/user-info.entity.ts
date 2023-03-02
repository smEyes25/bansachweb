/* eslint-disable prettier/prettier */
import { BaseSchema } from 'src/commons/base-schema.common';
import { EntitySchema } from 'typeorm';
import { UserInfo } from '../class/user-info.class';

export const UserInfoEntity = new EntitySchema<UserInfo>({
  name: 'user_info',
  columns: {
    ...BaseSchema,
    full_name: {
      type: 'varchar',
      length: 50,
    },
    address: {
      type: 'varchar',
      length: 200,
    },
    phone_number: {
      type: 'varchar',
      length: 10,
    },
    email: {
      type: 'varchar',
      length: 50,
      nullable: true,
    },
    account_id: {
      type: 'varchar',
      length: 120,
    },
  },
});
