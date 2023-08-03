import { Entity, Column } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { IResource } from "../../domain/entities/Resource/IResource";

@Entity("resources")
export class ResourceDB extends BaseDBEntity implements IResource {
  constructor() {
    super();
  }

  @Column("varchar")
  name: string;

  @Column("varchar")
  originalName: string;

  @Column("varchar")
  type: string;

  @Column("numeric")
  size: number;

  @Column("varchar")
  src: string;

  @Column("bool")
  available: boolean;
}
