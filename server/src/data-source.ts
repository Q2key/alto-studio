import "reflect-metadata";
import { DataSource } from 'typeorm';
import { UserEntity } from "./infrastructure/entities/UserEntity";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "uskuzu",
    database: "altodb",
    synchronize: true,
    logging: false,
    entities: [UserEntity],
    migrations: [],
    subscribers: [],
});

export const createDataSource = async (): Promise<DataSource> => {
    return await AppDataSource.initialize();
}