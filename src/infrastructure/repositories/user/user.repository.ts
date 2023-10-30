import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../../database/entities/user.entity';
import { IUser } from '../../../domain/user/user.domain.interface';
import { GenericRepository } from '../../../contracts/generic-repository';
import { Inject, Injectable } from '@nestjs/common';
import { InjectionScope } from '../../../contracts/types/InjectionScope';

@Injectable()
export class UserRepository implements GenericRepository<IUser> {
  private repo: Repository<UserEntity>;
  constructor(@Inject(InjectionScope.DATA_SOURCE) private ds: DataSource) {
    this.repo = this.ds.getRepository(UserEntity);
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