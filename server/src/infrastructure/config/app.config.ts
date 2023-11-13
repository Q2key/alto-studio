import { AppConfig } from '../../contracts/app-config';
import * as process from 'process';

export default (): AppConfig => {
  return {
    apiConfig: {
      port: parseInt(process.env.PORT),
    },
    postgresConfig: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER_NAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
    },
  };
};
