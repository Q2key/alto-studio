import { Entity, Column, JoinColumn } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { IUnit } from "../../domain/entities/Unit/IUnit";
import { IResource } from "../../domain/entities/Resource/IResource";

@Entity("units")
export class UnitDB extends BaseDBEntity implements IUnit {
  constructor() {
    super();
  }

  @JoinColumn()
  resources: IResource[];

  @Column('varchar')
  text: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;
}
