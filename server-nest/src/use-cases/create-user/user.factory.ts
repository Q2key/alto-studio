import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../contracts/scope';
import { CryptoService } from '../../contracts/crypto-service';
import { UserDomain, UserRoles } from 'src/domain/user/user.domain';
import { CreateUserDto } from 'src/dto/user/create-user.dto';

@Injectable()
export class UserFactory {
  constructor(@Inject(Scope.CRYPTO_SERVICE) private crypto: CryptoService) {}

  async makeUser(dto: CreateUserDto): Promise<UserDomain> {
    const cryptoPass = await this.crypto.encryptString(dto.password, 'salt');

    const user = new UserDomain(
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

    return user;
  }
}
