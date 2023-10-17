import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UseCasesModule } from './use-cases/use-cases.module';

@Module({
  imports: [UseCasesModule],
  controllers: [UserController],
})
export class AppModule {}