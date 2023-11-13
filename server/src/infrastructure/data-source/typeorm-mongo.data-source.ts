import { DataSource as TypeOrmDataSource } from 'typeorm/data-source/DataSource';
import { PostgresConfig } from '../../contracts/app-config';
import { TypeOrmBaseDataSource } from './typeorm-base-data-source';

export class TypeormMongoDataSource extends TypeOrmBaseDataSource {
  dataSource: TypeOrmDataSource;

  constructor(private pgConfig: PostgresConfig) {
    super();
    this.dataSource = new TypeOrmDataSource({
      type: 'mongodb',
      // host: this.pgConfig.host,
      // port: this.pgConfig.port,
      username: this.pgConfig.username,
      password: this.pgConfig.password,
      // database: this.pgConfig.database,
      synchronize: true,
      logging: false,
      entities: [],
      migrations: [],
      subscribers: [],
    });
  }
}
