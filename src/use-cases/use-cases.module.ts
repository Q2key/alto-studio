import { Module } from '@nestjs/common';
import { UserFactory } from './create-user/user.factory';
import { DatabaseModule } from '../infrastructure/database/database.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CreateUserUseCase } from './create-user/create-user.use-case';
import { GetUsersUseCase } from './get-users/get-users.use-case';
import { CreateLessonUseCase } from './create-lesson/create-lesson.use-case';
import { CreateCourseUseCase } from './create-course/create-course.use-case';

@Module({
  imports: [DatabaseModule, InfrastructureModule],
  providers: [
    CreateUserUseCase,
    GetUsersUseCase,
    CreateLessonUseCase,
    CreateCourseUseCase,
    UserFactory,
  ],
  exports: [
    CreateUserUseCase,
    GetUsersUseCase,
    CreateLessonUseCase,
    CreateCourseUseCase,
    UserFactory,
  ],
})
export class UseCasesModule {}
