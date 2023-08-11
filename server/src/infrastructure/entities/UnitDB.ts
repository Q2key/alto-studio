import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { IUnit } from "../../domain/entities/Unit/IUnit";
import { LessonDB } from "./LessonDB";
import { ILesson } from "../../domain/entities/Lesson/ILesson";

@Entity("units")
export class UnitDB extends BaseDBEntity implements IUnit {
  constructor() {
    super();
  }

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  text: string;

  @JoinColumn()
  @ManyToOne(() => LessonDB, (lesson) => lesson.units)
  lesson: ILesson;
}
