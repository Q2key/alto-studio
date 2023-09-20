import { Injectable, Inject } from '@nestjs/common';
import { IUser } from '../../domain/user/user.interface';
import { Repository } from 'typeorm';
import { UserEntity } from '../../../infra/db/entities/user.entity';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<IUser[]> {
    return this.userRepository.find();
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
