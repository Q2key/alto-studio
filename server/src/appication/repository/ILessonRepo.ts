import { ILesson } from "../../domain/lesson/ILesson";

export interface ILessonRepository {
  save(user: ILesson): Promise<ILesson>;
  findOne(id: string): Promise<ILesson>;
  find: (fromIndex?: number, count?: number) => Promise<ILesson[]>;
  deleteOne: (id: string) => Promise<boolean>;
}
