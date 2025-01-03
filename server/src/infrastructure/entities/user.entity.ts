import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserRoles } from '../../domain/user/user.domain';
import { IUser } from '../../domain/user/user.domain.interface';

@Entity('user')
export class UserEntity extends BaseEntity implements IUser {
  constructor() {
    super();
  }

  @Column('varchar')
  firstName: string;

  @Column('numeric')
  role: UserRoles;

  @Column('varchar')
  middleName: string;

  @Column('varchar')
  lastName: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  passwordHash: string;

  @Column('varchar')
  salt: string;

  @Column('bool')
  active: boolean;

  @Column({ type: 'date', default: null })
  blockedAt: string;
}
