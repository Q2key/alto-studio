import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CourseRepository } from './repository/course.repository';
import { LessonRepository } from './repository/lesson.repository';
import { NativeCryptoService } from './crypto/native-crypto-service';
import {
  AbstractCourseRepo,
  AbstractLessonRepo,
  AbstractUserRepo,
} from './repository/abstract.repository';
import { AbstractCryptoService } from './crypto/abstract-crypto-service';
import { TypeOrmDataSource } from './data-source/type-orm-data-source';

@Module({
  imports: [],
  providers: [
    {
      provide: AbstractUserRepo,
      useClass: UserRepository,
    },
    {
      provide: AbstractCourseRepo,
      useClass: CourseRepository,
    },
    {
      provide: AbstractLessonRepo,
      useClass: LessonRepository,
    },
    {
      provide: AbstractCryptoService,
      useClass: NativeCryptoService,
    },
    {
      provide: TypeOrmDataSource,
      useFactory: async () => {
        const typeOrmDataSource: TypeOrmDataSource = new TypeOrmDataSource();
        await typeOrmDataSource.initDataSource();
        return typeOrmDataSource;
      },
    },
  ],
  exports: [
    AbstractUserRepo,
    AbstractCourseRepo,
    AbstractLessonRepo,
    AbstractCryptoService,
    TypeOrmDataSource,
  ],
})
export class InfrastructureModule {}
