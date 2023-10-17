export interface UserResponseDto {
  readonly id?: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  role: 'Admin' | 'User';
}
