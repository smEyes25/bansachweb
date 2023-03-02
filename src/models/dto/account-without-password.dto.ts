/* eslint-disable prettier/prettier */
export class AccountWithoutPasswordDTO {
  constructor(partial: Partial<AccountWithoutPasswordDTO>) {
    Object.assign(this, partial);
  }
  id: string;
  created_date: Date;
  modified_date: Date;
  last_logged_in_date: Date;
  username: string;
  status: number;
  role_ids: Array<string>;
  user_info_id: string;
}
