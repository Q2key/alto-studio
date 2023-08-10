import { ILessonResource } from "../entities/LessonResource/ILessonResource";

export interface ILessonResourceRepository {
  save(user: ILessonResource): Promise<ILessonResource>;
  findOne(id: number): Promise<ILessonResource>;
  find: (fromIndex?: number, count?: number) => Promise<ILessonResource[]>;
  deleteOne: (id: string) => Promise<boolean>;
}
