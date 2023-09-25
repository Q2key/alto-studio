import { IUser } from '../../domains/user/user.domain.interface';
import { IRepository } from '../../common/generic-repository';
import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../common/scope';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject(Scope.USER_REPOSITORY) private userRepository: IRepository<IUser>,
  ) {}

  async findAll(): Promise<IUser[]> {
    return this.userRepository.FindAll();
  }

  async create(user: unknown): Promise<IUser> {
    const model = user as IUser;
    return this.userRepository.Save({
      ...model,
      passwordHash: '',
      salt: '',
      active: true,
    });
  }
}
