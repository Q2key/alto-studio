import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [DomainModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
