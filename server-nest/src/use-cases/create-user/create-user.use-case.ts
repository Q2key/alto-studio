import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../contracts/scope';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { GenericRepository } from '../../contracts/generic-repository';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { UserFactory } from './user.factory';

@Injectable()
export class CreateUserUseCase
  implements GenericUseCase<CreateUserDto, Promise<IUser>>
{
  constructor(
    @Inject(Scope.USER_REPOSITORY)
    private userRepository: GenericRepository<IUser>,
    @Inject(UserFactory)
    private userFactory: UserFactory,
  ) {}

  async execute(dto: CreateUserDto): Promise<IUser> {
    const domain = await this.userFactory.makeUser(dto);
    return this.userRepository.Save(domain);
  }
}
