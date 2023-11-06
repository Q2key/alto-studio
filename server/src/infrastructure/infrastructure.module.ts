import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CourseRepository } from './repository/course.repository';
import { LessonRepository } from './repository/lesson.repository';
import { IocTokens } from '../contracts/IocTokens';
import { UserEntity } from './entities/user.entity';
import { DataSource } from 'typeorm';
import { NativeCryptoService } from './crypto/native-crypto-service';

@Module({
  imports: [],
  providers: [
    {
      provide: IocTokens.CRYPTO_SERVICE,
      useClass: NativeCryptoService,
    },
    {
      provide: IocTokens.USER_REPOSITORY,
      useClass: UserRepository,
    },
    {
      provide: IocTokens.COURSE_REPOSITORY,
      useClass: CourseRepository,
    },
    {
      provide: IocTokens.LESSON_REPOSITORY,
      useClass: LessonRepository,
    },
    {
      provide: IocTokens.DATA_SOURCE,
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
    IocTokens.USER_REPOSITORY,
    IocTokens.COURSE_REPOSITORY,
    IocTokens.LESSON_REPOSITORY,
    IocTokens.DATA_SOURCE,
    IocTokens.CRYPTO_SERVICE,
  ],
})
export class InfrastructureModule {}
