import { Inject, Injectable } from '@nestjs/common';
import { GenericRepository } from '../../contracts/generic-repository';
import { Repository } from 'typeorm';
import { IocTokens } from '../../contracts/IocTokens';
import { ICourse } from '../../domain/course/course.domain.interface';
import { CourseEntity } from '../entities/course.entity';
import { PostgresTypeOrmDataSource } from '../data-source/postgres-data-source';

@Injectable()
export class CourseRepository implements GenericRepository<ICourse> {
  private repo: Repository<CourseEntity>;

  constructor(
    @Inject(IocTokens.DATA_SOURCE) private ds: PostgresTypeOrmDataSource,
  ) {
    this.repo = this.ds.getDataSource().getRepository(CourseEntity);
  }

  async FindAll(): Promise<ICourse[]> {
    return await this.repo.find();
  }

  async Save(lesson: ICourse): Promise<ICourse> {
    return await this.repo.save(lesson);
  }

  async Delete(identity: string): Promise<ICourse> {
    return Promise.resolve(undefined);
  }

  async FindOne(params: unknown): Promise<ICourse> {
    return Promise.resolve(undefined);
  }

  async Update(update: ICourse): Promise<ICourse> {
    return Promise.resolve(undefined);
  }
}
