import { Entity, Column, ManyToOne } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { IUnitResource } from "../../domain/entities/UnitResource/IUnitResource";
import { UnitDB } from "./UnitDB";
import { ResourceDB } from "./ResourceDB";

@Entity("lesson_resources")
export class UnitResourceDB extends BaseDBEntity implements IUnitResource {
  constructor() {
    super();
  }

  @Column('varchar')
  type: string;

  @Column('uuid')
  resourceId: string;
  
  @Column('uuid')
  unitId: string;

  
  @ManyToOne(() => ResourceDB, r => r.UnitResources)
  resource: ResourceDB

  @ManyToOne(() => UnitDB, u => u.UnitResources)
  unit: UnitDB
}
