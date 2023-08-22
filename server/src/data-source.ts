import "reflect-metadata";
import { DataSource } from 'typeorm';
import { SubscriptionDB } from "./frameworks/typeorm-entities/SubscriptionDB";
import { UserDB } from "./frameworks/typeorm-entities/UserDB";
import { ResourceDB } from "./frameworks/typeorm-entities/ResourceDB";
import { LessonDB } from "./frameworks/typeorm-entities/LessonDB";
import { UnitDB } from "./frameworks/typeorm-entities/UnitDB";
import { UnitResourceDB } from "./frameworks/typeorm-entities/UnitResourceDB";
import { CourseDB } from './frameworks/typeorm-entities/CourseDB';

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
        CourseDB,
        LessonDB,
        UnitResourceDB,
        UnitDB,
        SubscriptionDB,
    ],
    migrations: [],
    subscribers: [],
});

export const createDataSource = async (): Promise<DataSource> => {
    return await AppDataSource.initialize();
}