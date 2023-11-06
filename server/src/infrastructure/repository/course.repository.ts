import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { IocTokens } from '../../contracts/IocTokens';
import { ICourse } from '../../domain/course/course.domain.interface';
import { CourseEntity } from '../entities/course.entity';
import { AbstractCourseRepo } from './abstract.repository';

@Injectable()
export class CourseRepository implements AbstractCourseRepo {
  private repo: Repository<CourseEntity>;

  constructor(@Inject(IocTokens.DATA_SOURCE) private ds: DataSource) {
    this.repo = this.ds.getRepository(CourseEntity);
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
