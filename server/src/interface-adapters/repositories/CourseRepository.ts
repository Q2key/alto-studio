import { DataSource, Repository } from 'typeorm';
import { IServiceCradle } from '../../appication/abstractions';
import { ICourseRepository } from '../../appication/repository/ICourseRepo';
import { ICourse } from '../../domain/course/ICourse';
import { CourseDB } from '../../frameworks/typeorm-entities/CourseDB';

export class CourseRepository implements ICourseRepository {
    private readonly ds: DataSource;
    private repo: Repository<CourseDB>;

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(CourseDB);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(e: ICourse): Promise<ICourse> {
        const created = await this.repo.save<ICourse>(e);
        return Promise.resolve(created);
    }

    async findOne(id: string): Promise<ICourse> {
        const lesson = await this.repo.findOne({ where: { id } });
        return Promise.resolve(lesson);
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<ICourse[]> {
        const entities = await this.repo.find({relations: ['lessons.units.unit-resources']});
        return Promise.resolve(entities);
    }
}
