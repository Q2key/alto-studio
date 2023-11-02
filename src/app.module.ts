import { Module } from '@nestjs/common';
import { UserController } from './api/user.controller';
import { UseCasesModule } from './use-cases/use-cases.module';
import { RenderModule } from 'nest-next';
import NextServer from 'next';
import { resolve } from 'path';

@Module({
  imports: [
    RenderModule.forRootAsync(
      NextServer({
        dev: process.env.NODE_ENV !== 'production',
        dir: resolve(__dirname, '..'),
      }),
      { viewsDir: null },
    ),
    UseCasesModule,
  ],
  controllers: [UserController],
})
export class AppModule {}
