import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IResource } from '../../../domain/resource/resource.domain.interface';
import { UnitResourceEntity } from './unit-resource.entity';

@Entity('resources')
export class ResourceEntity extends BaseEntity implements IResource {
  constructor() {
    super();
  }

  @Column('varchar')
  name: string;

  @Column('varchar')
  originalName: string;

  @Column('varchar')
  type: string;

  @Column('varchar')
  mimeType: string;

  @Column('numeric')
  size: number;

  @Column('varchar')
  src: string;

  @Column('bool')
  available: boolean;

  /* Relationships */
  @OneToMany(() => UnitResourceEntity, (res) => res.resource)
  unitResources: UnitResourceEntity[];
}
