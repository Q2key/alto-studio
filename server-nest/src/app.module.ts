import { Module } from '@nestjs/common';
import { UserController } from './api/controllers/user.controller';
import { UseCasesModule } from './use-cases/use-cases.module';

@Module({
  imports: [UseCasesModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
