import { Inject, Injectable } from '@nestjs/common';
import { InjectionScope } from '../../contracts/types/InjectionScope';
import { GenericRepository } from '../../contracts/generic-repository';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';

@Injectable()
export class GetUsersUseCase
  implements GenericUseCase<undefined, Promise<IUser[]>>
{
  constructor(
    @Inject(InjectionScope.USER_REPOSITORY)
    private userRepository: GenericRepository<IUser>,
  ) {}

  async execute(): Promise<IUser[]> {
    return this.userRepository.FindAll();
  }
}
