import { Entity, Column, OneToMany, JoinColumn } from 'typeorm'
import { BaseDBEntity } from './BaseDBEntity';
import {ISubscription} from "../../domain/entities/Subscription/ISubscription";

@Entity('subscriptions')
export class SubscriptionEntity extends BaseDBEntity implements ISubscription {
    constructor() {
        super();
    }

    @Column('boolean')
    available: boolean;

    @Column('varchar')
    description: string;

    @Column('varchar')
    name: string;
}