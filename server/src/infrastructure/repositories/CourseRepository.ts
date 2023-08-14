import { DataSource, Repository } from 'typeorm';
import { IServiceCradle } from '../../abstractions';
import { IResourceRepository } from '../../domain/repository/IResourceRepo';
import { ResourceDB } from '../entities/ResourceDB';
import { IResource } from '../../domain/entities/Resource/IResource';
import { ILessonRepository } from '../../domain/repository/ILessonRepo';
import { LessonDB } from '../entities/LessonDB';
import { ILesson } from '../../domain/entities/Lesson/ILesson';
import { ICourseRepository } from '../../domain/repository/ICourseRepo';
import { ICourse } from '../../domain/entities/Course/ICourse';
import { CourseDB } from '../entities/CourseDB';

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
        const entities = await this.repo.find({});
        return Promise.resolve(entities);
    }
}
