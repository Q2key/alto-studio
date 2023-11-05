import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CourseRepository } from './repository/course.repository';
import { LessonRepository } from './repository/lesson.repository';
import { TypeormDataSourceProvider } from './data-source/typeorm-data-source.provider';
import { ArgonCryptoService } from './crypto/./argon-crypto-service';

@Module({
  imports: [],
  providers: [
    ArgonCryptoService,
    UserRepository,
    CourseRepository,
    LessonRepository,
    TypeormDataSourceProvider,
  ],
  exports: [
    UserRepository,
    CourseRepository,
    LessonRepository,
    ArgonCryptoService,
    TypeormDataSourceProvider,
  ],
})
export class InfrastructureModule {}
