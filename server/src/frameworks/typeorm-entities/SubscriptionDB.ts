import { Entity, Column, JoinColumn } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import {
  BillingCycleKind,
  DurationKind,
  ISubscription,
} from "../../domain/subscription/ISubscription";
import { IUser } from "../../domain/user/IUser";

@Entity("subscriptions")
export class SubscriptionDB extends BaseDBEntity implements ISubscription {
  constructor() {
    super();
  }

  @Column('uuid')
  userId: string;
  
  @JoinColumn()
  user: IUser;

  @Column("boolean")
  available: boolean;

  @Column("date")
  startedAt: string;

  @Column("date")
  expiredAt: string;

  @Column("float")
  price: number;

  @Column("varchar")
  features: string[];

  @Column("varchar")
  durationKind: DurationKind;

  @Column("varchar")
  billingCycleKind: BillingCycleKind;

  @Column("varchar")
  description: string;

  @Column("varchar")
  name: string;
}
