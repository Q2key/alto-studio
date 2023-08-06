import { DataSource, Repository } from 'typeorm';
import { IServiceCradle } from '../../abstractions';
import { IResourceRepository } from '../../domain/repository/IResourceRepo';
import { ResourceDB } from '../entities/ResourceDB';
import { IResource } from '../../domain/entities/Resource/IResource';
import { ILessonRepository } from '../../domain/repository/ILessonRepo';
import { LessonDB } from '../entities/LessonDB';
import { ILesson } from '../../domain/entities/Lesson/ILesson';

export class LessonRepository implements ILessonRepository {
    private readonly ds: DataSource;
    private repo: Repository<LessonDB>;

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(LessonDB);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(e: ILesson): Promise<LessonDB> {
        const created = await this.repo.save<ILesson>(e);
        return Promise.resolve(created);
    }

    async findOne(id: number): Promise<ILesson> {
        throw 'not implemented';
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<ILesson[]> {
        const entities = await this.repo.find();
        return Promise.resolve(entities);
    }
}
