import { AppConfig } from '../../contracts/app-config';

export default (): AppConfig => {
  return {
    apiConfig: {
      port: parseInt(process.env.PORT),
    },
    postgresConfig: {
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'postgres',
      database: 'alto',
    },
  };
};
