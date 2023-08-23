import { Entity, Column, JoinColumn, ManyToOne, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { IUnit } from "../../domain/unit/IUnit";
import { LessonDB } from "./LessonDB";
import { ILesson } from "../../domain/lesson/ILesson";
import { IResource } from "../../domain/resource/IResource";
import { ResourceDB } from "./ResourceDB";
import { IUnitResource } from "../../domain/unit-resource/IUnitResource";
import { UnitResourceDB } from "./UnitResourceDB";

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
  @ManyToOne(() => LessonDB, e => e.units)
  lesson: ILesson;

  @OneToMany(() => UnitResourceDB, e => e.unit)
  unitResources: IUnitResource[]
}
