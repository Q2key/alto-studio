import { Module } from '@nestjs/common';
import { DatabaseProvider } from './data-source.provider';

@Module({
  providers: [DatabaseProvider],
  exports: [DatabaseProvider],
})
export class DataSourceModule {}
