import { BaseSchema, BaseSchemaWithDate } from 'src/commons/base-schema.common';
import { EntitySchema } from 'typeorm';
import { Role } from '../class/role.class';

export const RoleEntity = new EntitySchema<Role>({
  name: 'role',
  columns: {
    ...BaseSchemaWithDate,
    name: {
      type: 'varchar',
      length: 50,
    },
  },
});
