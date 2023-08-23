import { Entity, Column, JoinColumn, OneToMany } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { ILesson } from "../../domain/lesson/ILesson";
import { ICourse } from '../../domain/course/ICourse';
import { LessonDB } from './LessonDB';


@Entity("courses")
export class CourseDB extends BaseDBEntity implements ICourse {
  constructor() {
    super();
  }

  @Column('varchar')
  description: string;

  @Column('varchar')
  name: string;

  @JoinColumn()
  @OneToMany(() => LessonDB, lesson => lesson.course)
  lessons: ILesson[];
}
