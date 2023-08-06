import { ILesson } from "../entities/Lesson/ILesson";

export interface ILessonRepository {
  save(user: ILesson): Promise<ILesson>;
  findOne(id: number): Promise<ILesson>;
  find: (fromIndex?: number, count?: number) => Promise<ILesson[]>;
  deleteOne: (id: string) => Promise<boolean>;
}
