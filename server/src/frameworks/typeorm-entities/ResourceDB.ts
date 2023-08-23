import { Entity, Column, JoinTable, ManyToMany, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseDBEntity } from './BaseDBEntity';
import { IResource } from '../../domain/resource/IResource';
import { UnitDB } from './UnitDB';
import { IUnit } from '../../domain/unit/IUnit';
import { UnitResourceDB } from './UnitResourceDB';
import { IUnitResource } from '../../domain/unit-resource/IUnitResource';

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
    @OneToMany(() => UnitResourceDB, res => res.resource)
    unitResources: IUnitResource[]
}
