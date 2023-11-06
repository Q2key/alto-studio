import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/contracts/dto/create-user.dto';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { UserDomain, UserRoles } from '../../domain/user/user.domain';
import { AbstractUserRepo } from '../../infrastructure/repository/abstract.repository';
import { AbstractCryptoService } from '../../infrastructure/crypto/abstract-crypto-service';

@Injectable()
export class CreateUserUseCase
  implements GenericUseCase<CreateUserDto, Promise<IUser>>
{
  constructor(
    private repo: AbstractUserRepo,
    private crypto: AbstractCryptoService,
  ) {}

  async execute(dto: CreateUserDto): Promise<IUser> {
    const cryptoPass = await this.crypto.encryptString(dto.password, 'salt');

    const domain = new UserDomain(
      dto.firstName,
      dto.middleName,
      dto.lastName,
      dto.email,
      cryptoPass,
      'salt',
      UserRoles.User,
      true,
      undefined,
    );

    return this.repo.Save(domain);
  }
}
