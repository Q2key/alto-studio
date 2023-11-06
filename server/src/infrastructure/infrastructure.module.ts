import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CourseRepository } from './repository/course.repository';
import { LessonRepository } from './repository/lesson.repository';
import { UserEntity } from './entities/user.entity';
import { DataSource } from 'typeorm';
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
      provide: AbstractCryptoService,
      useClass: NativeCryptoService,
    },
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
      provide: TypeOrmDataSource,
      useFactory: async () => {
        const ds = new TypeOrmDataSource();
        await ds.initDataSource();
        return ds;
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
