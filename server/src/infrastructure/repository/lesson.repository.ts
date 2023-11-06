import { Injectable } from '@nestjs/common';
import { Repository as TypeOrmRepository } from 'typeorm';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { LessonEntity } from '../entities/lesson.entity';
import { AbstractLessonRepo } from './abstract.repository';
import { TypeOrmDataSource } from '../data-source/type-orm-data-source';

@Injectable()
export class LessonRepository implements AbstractLessonRepo {
  private db: TypeOrmRepository<LessonEntity>;

  constructor(private ds: TypeOrmDataSource) {
    this.db = this.ds.getDataSource().getRepository(LessonEntity);
  }

  async FindAll(): Promise<LessonEntity[]> {
    return await this.db.find();
  }

  async Save(lesson: ILesson): Promise<ILesson> {
    return await this.db.save(lesson);
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
