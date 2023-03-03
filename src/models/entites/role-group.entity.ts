import { Column, Entity, PrimaryColumn } from 'typeorm';

// export const RoleGroupEntity = new EntitySchema<RoleGroup>({
//   name: 'role_group',
//   columns: {
//     ...BaseSchema,
//     account_id: {
//       type: 'varchar',
//       length: 120,
//     },
//     role_id: {
//       type: 'varchar',
//       length: 120,
//     },
//   },
// });

@Entity()
export class RoleGroup {
  @PrimaryColumn({
    type: 'varchar',
    length: 120,
    unique: true,
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 120,
  })
  account_id: string;

  @Column({
    type: 'varchar',
    length: 120,
  })
  role_id: string;
}
