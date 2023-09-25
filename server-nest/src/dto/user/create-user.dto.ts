export interface CreateUserDto {
  id?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  password: string;
  role: 'Admin' | 'User';
}
