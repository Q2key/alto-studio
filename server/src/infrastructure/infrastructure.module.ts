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
import { AbstractLogger } from './logger/abstract-logger';
import { ConsoleLogger } from './logger/console-logger';
import { AbstractAuthService } from './auth/abstract-auth-service';
import { ConcreteAuthService } from './auth/auth-service';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
  ],
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
    {
      provide: AbstractLogger,
      useClass: ConsoleLogger,
    },
    {
      provide: AbstractAuthService,
      useClass: ConcreteAuthService,
    },
  ],
  exports: [
    AbstractUserRepo,
    AbstractCourseRepo,
    AbstractLessonRepo,
    AbstractCryptoService,
    AbstractLogger,
    TypeOrmDataSource,
    AbstractAuthService,
    ConfigModule,
  ],
})
export class InfrastructureModule {}
