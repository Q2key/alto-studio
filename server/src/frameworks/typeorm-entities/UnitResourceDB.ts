import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { IUnitResource } from "../../domain/UnitResource/IUnitResource";
import { UnitDB } from "./UnitDB";
import { ResourceDB } from "./ResourceDB";

@Entity("unit_resources")
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


  @ManyToOne(() => ResourceDB, r => r.unitResources)
  resource: ResourceDB

  @ManyToOne(() => UnitDB, u => u.unitResources)
  unit: UnitDB
}
