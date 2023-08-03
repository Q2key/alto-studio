import { Entity, Column, JoinColumn } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { ILessonResources } from "../../domain/entities/LessonResources/ILessonResources";

@Entity("lesson_resources")
export class LessonResourcesDB extends BaseDBEntity implements ILessonResources {
  constructor() {
    super();
  }

  @Column("uuid", { nullable: true })
  resourceId: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;
 
  @JoinColumn()
  mediaResource: ILessonResources[];
}
