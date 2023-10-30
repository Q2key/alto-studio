import { UserRoles } from 'src/domain/user/user.domain';

export interface CreateUserDto {
  id?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  password: string;
  role: UserRoles;
}
