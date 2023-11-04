import { Inject, Injectable } from '@nestjs/common';
import { IocTokens } from '../../contracts/IocTokens';
import { GenericRepository } from '../../contracts/generic-repository';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { UserRepository } from '../../infrastructure/repository/user.repository';

@Injectable()
export class GetUsersUseCase
  implements GenericUseCase<undefined, Promise<IUser[]>>
{
  constructor(
    @Inject(UserRepository)
    private userRepository: GenericRepository<IUser>,
  ) {}

  async execute(): Promise<IUser[]> {
    return this.userRepository.FindAll();
  }
}
