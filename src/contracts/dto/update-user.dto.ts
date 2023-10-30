import { IUser } from '../../domain/user/user.domain.interface';

export interface UpdateUserDto {
  id: string;
  user: Omit<Partial<IUser>, 'id'>;
}
