import { BaseSchema } from '../../commons/base-schema.common';
import { EntitySchema } from 'typeorm';
import { RoleGroup } from '../../models/class/role-group.class';

export const RoleGroupEntity = new EntitySchema<RoleGroup>({
  name: 'role_group',
  columns: {
    ...BaseSchema,
    account_id: {
      type: 'varchar',
      length: 120,
    },
    role_id: {
      type: 'varchar',
      length: 120,
    },
  },
});
