import { Entity, Column, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IUser } from '../../domain/user/user.domain.interface';
import {
  BillingCycleKind,
  DurationKind,
  ISubscription,
} from '../../domain/subscription/subscription.domain.interface';

@Entity('subscriptions')
export class SubscriptionEntity extends BaseEntity implements ISubscription {
  constructor() {
    super();
  }

  @Column('uuid')
  userId: string;

  @JoinColumn()
  user: IUser;

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

  @Column('varchar')
  durationKind: DurationKind;

  @Column('varchar')
  billingCycleKind: BillingCycleKind;

  @Column('varchar')
  description: string;

  @Column('varchar')
  name: string;
}
