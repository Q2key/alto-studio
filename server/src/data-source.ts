import "reflect-metadata";
import { DataSource } from 'typeorm';
import { SubscriptionDB } from "./infrastructure/entities/SubscriptionDB";
import { UserDB } from "./infrastructure/entities/UserDB";
import { ResourceDB } from "./infrastructure/entities/ResourceDB";
import { LessonDB } from "./infrastructure/entities/LessonDB";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "alto",
    synchronize: true,
    logging: false,
    entities: [
        UserDB,
        ResourceDB,
        LessonDB,
        SubscriptionDB,
    ],
    migrations: [],
    subscribers: [],
});

export const createDataSource = async (): Promise<DataSource> => {
    return await AppDataSource.initialize();
}