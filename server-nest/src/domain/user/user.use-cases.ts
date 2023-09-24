import { IUser } from '../entity/user.interface';
import { IRepository } from '../abstract/repository.abstract';

export class UserUseCases {
  constructor(private userRepository: IRepository<IUser>) {}

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
