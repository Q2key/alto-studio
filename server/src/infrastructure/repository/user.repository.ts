import { Repository as TypeOrmRepository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUser } from '../../domain/user/user.domain.interface';
import { Injectable } from '@nestjs/common';
import { AbstractUserRepo } from '../abs/abstract.repository';
import { AbstractTypeormDataSource } from '../abs/abstract.typeorm.data-source';

@Injectable()
export class UserRepository implements AbstractUserRepo {
  private repo: TypeOrmRepository<UserEntity>;

  constructor(private ds: AbstractTypeormDataSource) {
    this.repo = this.ds.getDataSource().getRepository(UserEntity);
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
