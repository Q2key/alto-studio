import { Entity, Column } from 'typeorm'
import { BaseDBEntity } from './BaseDBEntity';

@Entity('plan')
export class PlanEntity extends BaseDBEntity {
    constructor() {
        super();
    }

    @Column('varchar')
    name: string;
}