import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CourseRepository } from './repository/course.repository';
import { LessonRepository } from './repository/lesson.repository';
import { ArgonCryptoService } from './crypto/./argon-crypto-service';
import { IocTokens } from '../contracts/IocTokens';
import { UserEntity } from './entities/user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [],
  providers: [
    ArgonCryptoService,
    UserRepository,
    CourseRepository,
    LessonRepository,
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
    UserRepository,
    CourseRepository,
    LessonRepository,
    ArgonCryptoService,
    IocTokens.DATA_SOURCE,
  ],
})
export class InfrastructureModule {}
