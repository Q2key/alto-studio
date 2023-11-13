import { Injectable } from '@nestjs/common';
import { Repository as TypeOrmRepository } from 'typeorm';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { LessonEntity } from '../entities/typeorm/lesson.entity';
import { AbstractLessonRepo } from '../abs/abstract.repository';
import { AbstractPgDataSource } from '../abs/abstract.pg-data-source';
import { DataSource as TypeOrmDataSource } from 'typeorm/data-source/DataSource';

@Injectable()
export class LessonRepository implements AbstractLessonRepo {
  private repo: TypeOrmRepository<LessonEntity>;

  constructor(private ds: AbstractPgDataSource<TypeOrmDataSource>) {
    this.repo = this.ds.getDataSource().getRepository(LessonEntity);
  }

  async FindAll(): Promise<LessonEntity[]> {
    return await this.repo.find();
  }

  async Save(lesson: ILesson): Promise<ILesson> {
    return await this.repo.save(lesson);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async Delete(identity: string): Promise<ILesson> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async FindOne(params: unknown): Promise<ILesson> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async Update(update: ILesson): Promise<ILesson> {
    return Promise.resolve(undefined);
  }
}
