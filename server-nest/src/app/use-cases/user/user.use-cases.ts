import { IUser } from '../../../domain/user/user.domain.interface';
import { GenericRepository } from '../../core/generic-repository';
import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../core/scope';
import { CreateUserDto } from '../../../dto/user/create-user.dto';
import { UserService } from './user.service';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject(Scope.USER_REPOSITORY)
    private userRepository: GenericRepository<IUser>,

    @Inject(UserService)
    private userFactory: UserService,
  ) {}

  async findAll(): Promise<IUser[]> {
    return this.userRepository.FindAll();
  }

  async create(user: CreateUserDto): Promise<IUser> {
    const domain = await this.userFactory.makeUser(user);
    return this.userRepository.Save(domain);
  }
}
