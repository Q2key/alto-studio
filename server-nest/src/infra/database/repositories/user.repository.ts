import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUser } from '../../../domains/entities/user.interface';
import { IRepository } from '../../../common/generic-repository';

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

  async Delete(identity: string): Promise<IUser> {
    return Promise.resolve(undefined);
  }

  async FindOne(params: unknown): Promise<IUser> {
    return Promise.resolve(undefined);
  }

  async Update(update: IUser): Promise<IUser> {
    return Promise.resolve(undefined);
  }
}
