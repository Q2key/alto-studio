import { Injectable } from '@nestjs/common';
import { Repository as TypeOrmRepository } from 'typeorm';
import { ICourse } from '../../domain/course/course.domain.interface';
import { CourseEntity } from '../entities/course.entity';
import { AbstractCourseRepo } from './abstract.repository';
import { TypeOrmDataSource } from '../data-source/type-orm-data-source';

@Injectable()
export class CourseRepository implements AbstractCourseRepo {
  private repo: TypeOrmRepository<CourseEntity>;

  constructor(private ds: TypeOrmDataSource) {
    this.repo = this.ds.getDataSource().getRepository(CourseEntity);
  }

  async FindAll(): Promise<ICourse[]> {
    return await this.repo.find();
  }

  async Save(lesson: ICourse): Promise<ICourse> {
    return await this.repo.save(lesson);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async Delete(identity: string): Promise<ICourse> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async FindOne(params: unknown): Promise<ICourse> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async Update(update: ICourse): Promise<ICourse> {
    return Promise.resolve(undefined);
  }
}
