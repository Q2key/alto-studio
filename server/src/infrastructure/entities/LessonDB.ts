import { Entity, Column, JoinColumn } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { ILesson, ILessonStructure, LessonStructureType } from "../../domain/entities/Lesson/ILesson";

@Entity("lessons")
export class LessonDB extends BaseDBEntity implements ILesson {
  constructor() {
    super();
  }

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('numeric')
  structureType: LessonStructureType;

  @Column('jsonb', {default: {}})
  structure: ILessonStructure;
}
