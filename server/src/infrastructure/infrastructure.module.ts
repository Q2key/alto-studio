import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CourseRepository } from './repository/course.repository';
import { LessonRepository } from './repository/lesson.repository';
import { NativeCryptoService } from './crypto/native-crypto-service';
import {
  AbstractCourseRepo,
  AbstractLessonRepo,
  AbstractUserRepo,
} from './abs/abstract.repository';
import { AbstractCryptoService } from './abs/abstract-crypto-service';
import { TypeormPostgresDataSource } from './data-source/typeorm-postgres.data-source';
import { AbstractLogger } from './abs/abstract-logger';
import { ConsoleLogger } from './logger/console-logger';
import { AbstractAuthService } from './abs/abstract-auth-service';
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
      provide: TypeormPostgresDataSource,
      useFactory: async () => {
        const typeOrmDataSource: TypeormPostgresDataSource =
          new TypeormPostgresDataSource();
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
    TypeormPostgresDataSource,
    AbstractAuthService,
    ConfigModule,
  ],
})
export class InfrastructureModule {}
