import { Entity, Column, JoinColumn, OneToMany, JoinTable, ManyToMany } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { ILesson } from "../../domain/entities/Lesson/ILesson";
import { UnitDB } from "./UnitDB";
import { IUnit } from "../../domain/entities/Unit/IUnit";
import { ICourse } from '../../domain/entities/Course/ICourse';
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
