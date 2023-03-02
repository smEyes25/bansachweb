/* eslint-disable prettier/prettier */
import { v4 as uuid } from 'uuid';

export class CommonUtils {
  static generateID(name: string): string {
    return name + uuid();
  }
}
