import { Provider } from '@nestjs/common';
import { IocTokens } from '../../contracts/IocTokens';
import { TypeormDataSource } from './typeorm-data-source';

export const DataSourceProvider: Provider = {
  provide: IocTokens.DATA_SOURCE,
  useFactory: async () => {
    return new TypeormDataSource().initialize();
  },
};
