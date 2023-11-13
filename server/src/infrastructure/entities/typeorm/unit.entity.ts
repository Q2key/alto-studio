import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IUnit } from '../../../domain/unit/unit.domain.interface';
import { LessonEntity } from './lesson.entity';
import { UnitResourceEntity } from './unit-resource.entity';

@Entity('units')
export class UnitEntity extends BaseEntity implements IUnit {
  constructor() {
    super();
  }

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  text: string;

  @JoinColumn()
  @ManyToOne(() => LessonEntity, (e) => e.units)
  lesson: LessonEntity;

  @OneToMany(() => UnitResourceEntity, (e) => e.unit)
  unitResources: UnitResourceEntity[];
}
