import { Entity, Column, JoinColumn, OneToMany, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseDBEntity } from "./BaseDBEntity";
import { ILesson } from "../../domain/entities/Lesson/ILesson";
import { UnitDB } from "./UnitDB";
import { IUnit } from "../../domain/entities/Unit/IUnit";
import { ICourse } from '../../domain/entities/Course/ICourse';
import { CourseDB } from './CourseDB';


@Entity("lessons")
export class LessonDB extends BaseDBEntity implements ILesson {
  constructor() {
    super();
  }

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @JoinColumn()
  @OneToMany(() => UnitDB, (unit) => unit.lesson)
  units: IUnit[]

  @ManyToOne(() => CourseDB, (course) => course.lessons)
  course: ICourse;
}