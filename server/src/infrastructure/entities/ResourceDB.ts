import { Entity, Column, JoinTable, ManyToMany, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseDBEntity } from './BaseDBEntity';
import { IResource } from '../../domain/entities/Resource/IResource';
import { UnitDB } from './UnitDB';
import { IUnit } from '../../domain/entities/Unit/IUnit';
import { UnitResourceDB } from './UnitResourceDB';
import { IUnitResource } from '../../domain/entities/UnitResource/IUnitResource';

@Entity('resources')
export class ResourceDB extends BaseDBEntity implements IResource {
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
    @ManyToMany(() => UnitResourceDB, res => res.unit)
    UnitResources: IUnitResource[]
}
