export class Constants {
  // encrypt password
  static SALT_ROUNDS = 10;

  static JWT_SECRET = {
    secret_key: 'SECRET_KEY',
    expires_in: '1d',
  };

  static ROLES_KEY = 'roles';
}
