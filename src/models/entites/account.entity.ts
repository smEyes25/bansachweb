/* eslint-disable prettier/prettier */
import { BaseSchemaWithDate } from 'commons/base-schema.common';
import { EntitySchema } from 'typeorm';
import { Account } from '../class/account.class';

export const AccountEntity = new EntitySchema<Account>({
  name: 'account',
  columns: {
    ...BaseSchemaWithDate,
    last_logged_in_date: {
      type: 'date',
      nullable: true,
      default: null,
    },
    username: {
      type: 'varchar',
      length: 30,
      unique: true,
    },
    password: {
      type: 'varchar',
      length: 100,
    },
    status: {
      type: 'int',
      default: 2,
    },
    user_info_id: {
      type: 'varchar',
      length: 120,
    },
  },
});

// @Entity()
// export class Account {
//   @PrimaryColumn({
//     type: 'varchar',
//     length: 120,
//     unique: true,
//   })
//   id: string;

//   @Column({
//     type: 'date',
//   })
//   created_datetime: Date;

//   @Column({
//     type: 'date',
//   })
//   last_logged_in_datetime: Date;

//   @Column({
//     type: 'date',
//   })
//   modified_datetime: Date;

//   @Column({
//     type: 'varchar',
//     length: 24,
//     unique: true,
//   })
//   username: string;

//   @Column({
//     type: 'varchar',
//     length: 100,
//   })
//   password: string;

//   // 1: active - 0: no active
//   @Column({
//     default: 1,
//   })
//   status: number;

//   @Column({
//     type: 'varchar',
//     length: 120,
//   })
//   user_id: string;
// }
