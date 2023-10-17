import { Inject, Injectable } from '@nestjs/common';
import { GenericRepository } from '../../../contracts/generic-repository';
import { DataSource, Repository } from 'typeorm';
import { Scope } from '../../../contracts/scope';
import { ILesson } from '../../../domain/lesson/lesson.domain.interface';
import { LessonEntity } from '../../database/entities/lesson.entity';

@Injectable()
export class LessonRepository implements GenericRepository<ILesson> {
  private repo: Repository<LessonEntity>;
  constructor(@Inject(Scope.DATA_SOURCE) private ds: DataSource) {
    this.repo = this.ds.getRepository(LessonEntity);
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
