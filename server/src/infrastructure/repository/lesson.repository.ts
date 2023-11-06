import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { IocTokens } from '../../contracts/IocTokens';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { LessonEntity } from '../entities/lesson.entity';
import { AbstractLessonRepo } from './abstract.repository';

@Injectable()
export class LessonRepository implements AbstractLessonRepo {
  private repo: Repository<LessonEntity>;

  constructor(private ds: DataSource) {
    this.repo = this.ds.getRepository(LessonEntity);
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
