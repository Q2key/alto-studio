import { Inject, Injectable } from '@nestjs/common';
import { GenericRepository } from '../../contracts/generic-repository';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { IocTokens } from '../../contracts/IocTokens';

@Injectable()
export class GetUsersUseCase
  implements GenericUseCase<undefined, Promise<IUser[]>>
{
  constructor(
    @Inject(IocTokens.USER_REPOSITORY)
    private userRepository: GenericRepository<IUser>,
  ) {}

  async execute(): Promise<IUser[]> {
    return this.userRepository.FindAll();
  }
}
