import { Injectable } from '@nestjs/common';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { AbstractUserRepo } from '../../infrastructure/repository/abstract.repository';

@Injectable()
export class GetUsersUseCase
  implements GenericUseCase<undefined, Promise<IUser[]>>
{
  constructor(private repo: AbstractUserRepo) {}

  async execute(): Promise<IUser[]> {
    return this.repo.FindAll();
  }
}
