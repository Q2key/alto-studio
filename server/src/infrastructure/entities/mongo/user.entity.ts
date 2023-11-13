import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { UserRoles } from '../../../domain/user/user.domain';
import { IUser } from '../../../domain/user/user.domain.interface';

@Entity('user')
export class UserEntity implements IUser {
  @ObjectIdColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  role: UserRoles;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;

  @Column()
  salt: string;

  @Column()
  active: boolean;

  @Column()
  blockedAt: string;
}
