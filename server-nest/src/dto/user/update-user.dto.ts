import { IUser } from '../../domains/user/user.domain.interface';

export interface UpdateUserDto {
  id: string;
  user: Omit<Partial<IUser>, 'id'>;
}
