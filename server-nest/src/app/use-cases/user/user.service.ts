import { CreateUserDto } from '../../../dto/user/create-user.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../core/scope';
import { CryptoService } from '../../core/crypto-service';
import { UserDomain, UserRoles } from '../../../domain/user/user.domain';

@Injectable()
export class UserService {
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
