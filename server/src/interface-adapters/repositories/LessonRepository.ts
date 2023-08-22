import { DataSource, Repository } from 'typeorm';
import { IServiceCradle } from '../../appication/abstractions';
import { IResourceRepository } from '../../appication/repository/IResourceRepo';
import { ResourceDB } from '../../frameworks/typeorm-entities/ResourceDB';
import { IResource } from '../../domain/Resource/IResource';
import { ILessonRepository } from '../../appication/repository/ILessonRepo';
import { LessonDB } from '../../frameworks/typeorm-entities/LessonDB';
import { ILesson } from '../../domain/Lesson/ILesson';

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

    async findOne(id: string): Promise<ILesson> {
        const lesson = await this.repo.findOne({ where: { id } });
        return Promise.resolve(lesson);
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<ILesson[]> {
        const entities = await this.repo.find({ relations: { units: true } });
        return Promise.resolve(entities);
    }
}
