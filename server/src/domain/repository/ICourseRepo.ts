import { ICourse } from '../entities/Course/ICourse';

export interface ICourseRepository {
    save(user: ICourse): Promise<ICourse>;

    findOne(id: string): Promise<ICourse>;

    find: (fromIndex?: number, count?: number) => Promise<ICourse[]>;
    deleteOne: (id: string) => Promise<boolean>;
}
