import { BaseSchema, BaseSchemaWithDate } from 'commons/base-schema.common';
import { EntitySchema } from 'typeorm';
import { Role } from 'models/class/role.class';

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
