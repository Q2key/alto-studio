import { Provider } from '@nestjs/common';
import { IocTokens } from '../../contracts/IocTokens';
import { PostgresTypeOrmDataSource } from './postgres-data-source';

export const TypeormDataSourceProvider: Provider = {
  provide: IocTokens.DATA_SOURCE,
  useFactory: async () => {
    const pgDataSource = new PostgresTypeOrmDataSource();
    await pgDataSource.initDataSource();
    return pgDataSource;
  },
};
