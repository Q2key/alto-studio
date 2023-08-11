import { Entity, Column, JoinColumn, OneToMany } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { ILesson } from "../../domain/entities/Lesson/ILesson";
import { UnitDB } from "./UnitDB";
import { IUnit } from "../../domain/entities/Unit/IUnit";

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
  @OneToMany(() => UnitDB, (unit) => unit)
  units: IUnit[]
}
