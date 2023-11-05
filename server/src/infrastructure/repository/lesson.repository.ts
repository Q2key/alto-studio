import { Inject, Injectable } from '@nestjs/common';
import { GenericRepository } from '../../contracts/generic-repository';
import { Repository } from 'typeorm';
import { IocTokens } from '../../contracts/IocTokens';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { LessonEntity } from '../entities/lesson.entity';
import { PostgresTypeOrmDataSource } from '../data-source/postgres-data-source';

@Injectable()
export class LessonRepository implements GenericRepository<ILesson> {
  private repo: Repository<LessonEntity>;

  constructor(
    @Inject(IocTokens.DATA_SOURCE) private ds: PostgresTypeOrmDataSource,
  ) {
    this.repo = this.ds.getDataSource().getRepository(LessonEntity);
  }

  async FindAll(): Promise<LessonEntity[]> {
    return await this.repo.find();
  }

  async Save(lesson: ILesson): Promise<ILesson> {
    return await this.repo.save(lesson);
  }

  async Delete(identity: string): Promise<ILesson> {
    return Promise.resolve(undefined);
  }

  async FindOne(params: unknown): Promise<ILesson> {
    return Promise.resolve(undefined);
  }

  async Update(update: ILesson): Promise<ILesson> {
    return Promise.resolve(undefined);
  }
}
