import { GenericRepository } from '../../contracts/generic-repository';
import { Injectable } from '@nestjs/common';
import { IUser } from '../../domain/user/user.domain.interface';
import { ICourse } from '../../domain/course/course.domain.interface';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';

@Injectable()
export abstract class AbstractRepository<T> implements GenericRepository<T> {
  abstract Delete(identity: string): Promise<T>;

  abstract FindAll(): Promise<T[]>;

  abstract FindOne(params: unknown): Promise<T>;

  abstract Save(data: T): Promise<T>;

  abstract Update(update: T): Promise<T>;
}

export abstract class AbstractUserRepo extends AbstractRepository<IUser> {}
export abstract class AbstractCourseRepo extends AbstractRepository<ICourse> {}
export abstract class AbstractLessonRepo extends AbstractRepository<ILesson> {}
