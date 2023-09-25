import { IUser } from '../../domain/user/user.domain.interface';
import { IRepository } from '../../core/generic-repository';
import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../core/scope';
import { ArgonCryptoService } from '../../infra/crypto/argon-crypto';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject(Scope.USER_REPOSITORY)
    private userRepository: IRepository<IUser>,
    private cryptoService: ArgonCryptoService,
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
