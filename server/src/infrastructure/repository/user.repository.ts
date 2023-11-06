import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUser } from '../../domain/user/user.domain.interface';
import { Inject, Injectable } from '@nestjs/common';
import { AbstractUserRepo } from './abstract.repository';
import { IocTokens } from '../../contracts/IocTokens';

@Injectable()
export class UserRepository implements AbstractUserRepo {
  private repo: Repository<UserEntity>;

  constructor(private ds: DataSource) {
    this.repo = this.ds.getRepository(UserEntity);
  }

  async FindAll(): Promise<UserEntity[]> {
    return await this.repo.find();
  }

  async Save(user: IUser): Promise<IUser> {
    return await this.repo.save(user);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async Delete(identity: string): Promise<IUser> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async FindOne(params: unknown): Promise<IUser> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async Update(update: IUser): Promise<IUser> {
    return Promise.resolve(undefined);
  }
}
