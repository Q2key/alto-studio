import { GenericRepository } from '../../iface/generic-repository';
import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../iface/scope';
import { UserFactory } from './user.factory';
import { IUser } from 'src/domain/user/user.domain.interface';
import { CreateUserDto } from 'src/dto/user/create-user.dto';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject(Scope.USER_REPOSITORY)
    private userRepository: GenericRepository<IUser>,

    @Inject(UserFactory)
    private userFactory: UserFactory,
  ) {}

  async findAll(): Promise<IUser[]> {
    return this.userRepository.FindAll();
  }

  async create(user: CreateUserDto): Promise<IUser> {
    const domain = await this.userFactory.makeUser(user);
    return this.userRepository.Save(domain);
  }
}
