import { Entity, Column, JoinColumn, OneToMany } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { BaseEntity } from './base.entity';
import { ICourse } from '../../../domain/course/course.domain.interface';
import { ILesson } from '../../../domain/lesson/lesson.domain.interface';

@Entity('courses')
export class CourseEntity extends BaseEntity implements ICourse {
  constructor() {
    super();
  }

  @Column('varchar')
  description: string;

  @Column('varchar')
  name: string;

  @JoinColumn()
  @OneToMany(() => LessonEntity, (lesson) => lesson.course)
  lessons: ILesson[];
}
