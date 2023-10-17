import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../contracts/scope';
import { GenericRepository } from '../../contracts/generic-repository';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';

@Injectable()
export class GetUsersUserUseCase
  implements GenericUseCase<undefined, Promise<IUser[]>>
{
  constructor(
    @Inject(Scope.USER_REPOSITORY)
    private userRepository: GenericRepository<IUser>,
  ) {}

  async execute(): Promise<IUser[]> {
    return this.userRepository.FindAll();
  }
}
