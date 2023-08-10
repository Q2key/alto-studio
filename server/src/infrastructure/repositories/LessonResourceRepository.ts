import { DataSource, Repository } from 'typeorm';
import { IServiceCradle } from '../../abstractions';
import { ILessonResourceRepository } from '../../domain/repository/ILessonResourceRepo';
import { ILessonResource } from '../../domain/entities/LessonResource/ILessonResource';
import { LessonResourceDB } from '../entities/LessonResourceDB';

export class LessonResourceRepository implements ILessonResourceRepository {
    private readonly ds: DataSource;
    private repo: Repository<LessonResourceDB>;

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(LessonResourceDB);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(e: ILessonResource): Promise<LessonResourceDB> {
        const created = await this.repo.save<ILessonResource>(e);
        return Promise.resolve(created);
    }

    async findOne(id: number): Promise<ILessonResource> {
        throw 'not implemented';
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<ILessonResource[]> {
        const entities = await this.repo.find();
        return Promise.resolve(entities);
    }
}
