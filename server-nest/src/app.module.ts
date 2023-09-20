import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { UserController } from './controllers/user.controller';
import { UseCasesModule } from './core/use-cases/use-cases.module';

@Module({
  imports: [DatabaseModule, UseCasesModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
