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
      provide: DataSource,
      useFactory: async () => {
        const ds = new DataSource({
          type: 'postgres',
          host: 'localhost',
          port: 5435,
          username: 'postgres',
          password: 'postgres',
          database: 'alto',
          synchronize: true,
          logging: false,
          entities: [UserEntity],
          migrations: [],
          subscribers: [],
        });
        return await ds.initialize();
      },
    },
  ],
  exports: [
    AbstractUserRepo,
    AbstractCourseRepo,
    AbstractLessonRepo,
    AbstractCryptoService,
    DataSource,
  ],
})
export class InfrastructureModule {}
