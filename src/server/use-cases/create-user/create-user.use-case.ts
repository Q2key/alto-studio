import { Inject, Injectable } from '@nestjs/common';
import { InjectionScope } from '../../contracts/types/InjectionScope';
import { CreateUserDto } from 'src/server/contracts/dto/create-user.dto';
import { GenericRepository } from '../../contracts/generic-repository';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { CryptoService } from '../../contracts/crypto-service';
import { UserDomain, UserRoles } from '../../domain/user/user.domain';

@Injectable()
export class CreateUserUseCase
  implements GenericUseCase<CreateUserDto, Promise<IUser>>
{
  constructor(
    @Inject(InjectionScope.USER_REPOSITORY)
    private userRepository: GenericRepository<IUser>,
    @Inject(InjectionScope.CRYPTO_SERVICE) private crypto: CryptoService,
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

    return this.userRepository.Save(domain);
  }
}
