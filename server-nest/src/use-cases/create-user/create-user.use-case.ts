import { Inject, Injectable } from '@nestjs/common';
import { InjectionScope } from '../../contracts/types/InjectionScope';
import { CreateUserDto } from 'src/contracts/dto/create-user.dto';
import { GenericRepository } from '../../infrastructure/repositories/generic-repository';
import { IUser } from '../../domain/user/user.domain.interface';
import { GenericUseCase } from '../generic-use-case';
import { UserFactory } from './user.factory';

@Injectable()
export class CreateUserUseCase
  implements GenericUseCase<CreateUserDto, Promise<IUser>>
{
  constructor(
    @Inject(InjectionScope.USER_REPOSITORY)
    private userRepository: GenericRepository<IUser>,
    @Inject(UserFactory)
    private userFactory: UserFactory,
  ) {}

  async execute(dto: CreateUserDto): Promise<IUser> {
    const domain = await this.userFactory.makeUser(dto);
    return this.userRepository.Save(domain);
  }
}
