import { AuthorizableUser } from 'nest-casl';
import { UserType } from './@generated';

export class UserSecurity implements AuthorizableUser<UserType, string> {
  id: string;
  fullName?: string;
  roles: Array<UserType>;
  isSuperAdmin: boolean;
  phoneNumber: string;
}
