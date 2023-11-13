import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/contracts/dto/create-user.dto';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { UserDomain, UserRoles } from '../../domain/user/user.domain';
import { AbstractUserRepo } from '../../infrastructure/abs/abstract.repository';
import { AbstractCryptoService } from '../../infrastructure/abs/abstract.crypto-service';
import { AbstractAuthService } from '../../infrastructure/abs/abstract.auth-service';
import { AbstractLogger } from '../../infrastructure/abs/abstract.logger';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from '../../infrastructure/config/app.config';

@Injectable()
export class CreateUserUseCase
  implements GenericUseCase<CreateUserDto, Promise<IUser>>
{
  constructor(
    private repo: AbstractUserRepo,
    private crypto: AbstractCryptoService,
    private authService: AbstractAuthService,
    private logger: AbstractLogger,
  ) {}

  async execute(dto: CreateUserDto): Promise<IUser> {
    const cryptoPass = await this.crypto.encryptString(dto.password, 'salt');
    const authService = await this.authService.validateUser('', '', '');

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
