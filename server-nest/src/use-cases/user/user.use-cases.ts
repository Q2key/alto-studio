import { IUser } from '../../domain/user/user.domain.interface';
import { GenericRepository } from '../../core/generic-repository';
import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../core/scope';
import { CryptoService } from '../../core/crypto-service';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject(Scope.USER_REPOSITORY)
    private userRepository: GenericRepository<IUser>,

    @Inject(Scope.CRYPTO_SERVICE)
    private cryptoService: CryptoService,
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
