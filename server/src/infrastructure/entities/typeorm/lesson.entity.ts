import { Entity, Column, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

import { BaseEntity } from './base.entity';
import { ILesson } from '../../../domain/lesson/lesson.domain.interface';
import { IUnit } from '../../../domain/unit/unit.domain.interface';
import { ICourse } from '../../../domain/course/course.domain.interface';
import { UnitEntity } from './unit.entity';
import { CourseEntity } from './course.entity';

@Entity('lessons')
export class LessonEntity extends BaseEntity implements ILesson {
  constructor() {
    super();
  }

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @JoinColumn()
  @OneToMany(() => UnitEntity, (unit) => unit.lesson)
  units: IUnit[];

  @ManyToOne(() => CourseEntity, (course) => course.lessons)
  course: ICourse;
}
