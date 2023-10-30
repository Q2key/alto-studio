import { Inject, Injectable } from '@nestjs/common';
import { GenericRepository } from '../../../contracts/generic-repository';
import { DataSource, Repository } from 'typeorm';
import { InjectionScope } from '../../../contracts/types/InjectionScope';
import { ICourse } from '../../../domain/course/course.domain.interface';
import { CourseEntity } from '../../database/entities/course.entity';

@Injectable()
export class CourseRepository implements GenericRepository<ICourse> {
  private repo: Repository<CourseEntity>;
  constructor(@Inject(InjectionScope.DATA_SOURCE) private ds: DataSource) {
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
