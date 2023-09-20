import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUser } from '../../../core/domain/user/user.interface';
@Injectable()
export class UserRepository {
  private repo: Repository<UserEntity>;
  constructor(ds: DataSource) {
    this.repo = ds.getRepository(UserEntity);
  }

  async findAll(): Promise<IUser[]> {
    return await this.repo.find();
  }

  async save(user: IUser): Promise<IUser> {
    return await this.repo.save(user);
  }
}
