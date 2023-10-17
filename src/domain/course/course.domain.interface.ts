import { ILesson } from '../lesson/lesson.domain.interface';

export interface ICourse {
  id?: string;
  name: string;
  description: string;
  lessons: ILesson[];
}
