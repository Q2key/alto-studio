import { Injectable } from '@nestjs/common';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { AbstractUserRepo } from '../../infrastructure/abs/abstract.repository';
import { AbstractLogger } from '../../infrastructure/abs/abstract-logger';

@Injectable()
export class GetUsersUseCase
  implements GenericUseCase<undefined, Promise<IUser[]>>
{
  constructor(
    private repo: AbstractUserRepo,
    private logger: AbstractLogger,
  ) {}

  async execute(): Promise<IUser[]> {
    return this.repo.FindAll();
  }
}
