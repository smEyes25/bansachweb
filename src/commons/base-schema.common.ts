/* eslint-disable prettier/prettier */
import { EntitySchemaColumnOptions } from 'typeorm';

export const BaseSchemaWithDate = {
  id: {
    type: 'varchar',
    primary: true,
    length: 120,
  } as EntitySchemaColumnOptions,

  created_date: {
    type: 'date',
    name: 'created_date',
    nullable: true,
  } as EntitySchemaColumnOptions,
  modified_date: {
    type: 'date',
    name: 'modified_date',
    nullable: true,
  } as EntitySchemaColumnOptions,
};

export const BaseSchema = {
  id: {
    type: 'varchar',
    primary: true,
    length: 120,
  } as EntitySchemaColumnOptions,
};
