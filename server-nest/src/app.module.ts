import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/db/database.module';
import { UserController } from './controllers/user.controller';
import { UserUseCasesModule } from './core/use-cases/user/user.use-cases.module';

@Module({
  imports: [DatabaseModule, UserUseCasesModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
