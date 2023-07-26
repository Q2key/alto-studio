import { Entity, Column } from 'typeorm'
import { BaseDBEntity } from './BaseDBEntity';
import { BillingCycleKind, DurationKind, ISubscription } from "../../domain/entities/Subscription/ISubscription";

@Entity('subscriptions')
export class SubscriptionEntity extends BaseDBEntity implements ISubscription {
    constructor() {
        super();
    }

    @Column('boolean')
    available: boolean;

    @Column('date')
    startedAt: string;
    
    @Column('date')
    expiredAt: string;
    
    @Column('float')
    price: number;

    @Column('varchar')
    features: string[];

    @Column('int')
    durationKind: DurationKind;
    
    @Column('int')
    billingCycleKind: BillingCycleKind;

    @Column('varchar')
    description: string;

    @Column('varchar')
    name: string;
}