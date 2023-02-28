import "reflect-metadata";
import { DataSource } from 'typeorm';
import { ProjectEntity } from "./infrastructure/entities/ProjectEntity";
import { RenderEntity } from "./infrastructure/entities/RenderEntity";
import { UserEntity } from "./infrastructure/entities/UserEntity";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "altodb",
    synchronize: true,
    logging: false,
    entities: [
        UserEntity,
        ProjectEntity,
        RenderEntity
    ],
    migrations: [],
    subscribers: [],
});

export const createDataSource = async (): Promise<DataSource> => {
    return await AppDataSource.initialize();
}