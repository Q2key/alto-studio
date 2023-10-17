import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IUnitResource } from '../../../domain/unit-resource/unit-resource.domain.interface';
import { ResourceEntity } from './resource.entity';
import { UnitEntity } from './unit.entity';

@Entity('unit_resources')
export class UnitResourceEntity extends BaseEntity implements IUnitResource {
  constructor() {
    super();
  }

  @Column('varchar')
  type: string;

  @Column('uuid')
  resourceId: string;

  @Column('uuid')
  unitId: string;

  @ManyToOne(() => ResourceEntity, (r) => r.unitResources)
  resource: ResourceEntity;

  @ManyToOne(() => UnitEntity, (u) => u.unitResources)
  unit: UnitEntity;
}
