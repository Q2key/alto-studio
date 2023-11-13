import { Module } from '@nestjs/common';
import appConfig from './config/app.config';
import { UserRepository } from './repository/user.repository';
import { CourseRepository } from './repository/course.repository';
import { LessonRepository } from './repository/lesson.repository';
import { NativeCryptoService } from './crypto/native-crypto-service';
import {
  AbstractCourseRepo,
  AbstractLessonRepo,
  AbstractUserRepo,
} from './abs/abstract.repository';
import { AbstractCryptoService } from './abs/abstract.crypto-service';
import { TypeormPostgresDataSource } from './data-source/typeorm-postgres.data-source';
import { AbstractLogger } from './abs/abstract.logger';
import { ConsoleLogger } from './logger/console-logger';
import { AbstractAuthService } from './abs/abstract.auth-service';
import { ConcreteAuthService } from './auth/auth-service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AbstractTypeormDataSource } from './abs/abstract.typeorm.data-source';
import { AbstractFileStorageService } from './abs/abstract.fille-storage.service';
import { S3Service } from './aws/s3.service';
import { PostgresConfig } from '../contracts/app-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
  ],
  providers: [
    {
      provide: AbstractTypeormDataSource,
      useFactory: async (configService: ConfigService) => {
        const postgresConfig =
          configService.get<PostgresConfig>('postgresConfig');
        const typeOrmDataSource = new TypeormPostgresDataSource(postgresConfig);
        await typeOrmDataSource.initDataSource();
        return typeOrmDataSource;
      },
      inject: [ConfigService],
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
      provide: AbstractCryptoService,
      useClass: NativeCryptoService,
    },
    {
      provide: AbstractLogger,
      useClass: ConsoleLogger,
    },
    {
      provide: AbstractAuthService,
      useClass: ConcreteAuthService,
    },
    {
      provide: AbstractFileStorageService,
      useClass: S3Service,
    },
  ],
  exports: [
    AbstractUserRepo,
    AbstractCourseRepo,
    AbstractLessonRepo,
    AbstractCryptoService,
    AbstractLogger,
    AbstractTypeormDataSource,
    AbstractAuthService,
    AbstractFileStorageService,
    ConfigModule,
  ],
})
export class InfrastructureModule {}
