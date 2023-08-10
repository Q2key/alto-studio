import { Entity, Column } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { ILessonResource } from "../../domain/entities/LessonResource/ILessonResource";

@Entity("lesson_resources")
export class LessonResourceDB extends BaseDBEntity implements ILessonResource {
  constructor() {
    super();
  }

  @Column('uuid', {default: null})
  lessonId: string;

  @Column('varchar')
  type: string;
}
