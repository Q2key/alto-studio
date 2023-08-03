import { Entity, Column, JoinColumn } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { ILesson } from "../../domain/entities/Lesson/ILesson";
import { ILessonResources } from "../../domain/entities/LessonResources/ILessonResources";

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
  mediaResource: ILessonResources[];
}
