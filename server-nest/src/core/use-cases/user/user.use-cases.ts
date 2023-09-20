import { Injectable, Inject } from '@nestjs/common';
import { IUser } from '../../domain/user/user.interface';
import { UserRepository } from '../../../infra/db/repositories/user.repository';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: UserRepository,
  ) {}

  async findAll(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }

  async create(user: unknown): Promise<IUser> {
    const model = user as IUser;
    return this.userRepository.save({
      ...model,
      passwordHash: '',
      salt: '',
      active: true,
    });
  }
}
