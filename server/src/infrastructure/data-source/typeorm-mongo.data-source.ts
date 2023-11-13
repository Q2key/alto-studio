import { DataSource as TypeOrmDataSource } from 'typeorm/data-source/DataSource';
import { MongoConfig } from '../../contracts/app-config';
import { TypeOrmBaseDataSource } from './typeorm-base-data-source';
import { UserEntity } from '../entities/mongo/user.entity';

export class TypeormMongoDataSource extends TypeOrmBaseDataSource {
  dataSource: TypeOrmDataSource;

  constructor(private mongoConfig: MongoConfig) {
    super();
    this.dataSource = new TypeOrmDataSource({
      type: 'mongodb',
      host: this.mongoConfig.host,
      port: this.mongoConfig.port,
      username: this.mongoConfig.username,
      // password: this.mongoConfig.password,
      database: this.mongoConfig.database,
      synchronize: true,
      logging: false,
      entities: [UserEntity],
      migrations: [],
      subscribers: [],
    });
  }
}
