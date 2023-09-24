import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUser } from '../../../domain/entity/user.interface';
import { IRepository } from '../../../domain/abstract/repository.abstract';

export class UserRepository implements IRepository<IUser> {
  private repo: Repository<UserEntity>;
  constructor(ds: DataSource) {
    this.repo = ds.getRepository(UserEntity);
  }

  async FindAll(): Promise<UserEntity[]> {
    return await this.repo.find();
  }

  async Save(user: IUser): Promise<IUser> {
    return await this.repo.save(user);
  }
}
