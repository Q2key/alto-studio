import {
  BillingCycleKind,
  DurationKind,
  ISubscription,
} from './subscription.domain.interface';
import { IUser } from '../user/user.domain.interface';

export class Subscription implements ISubscription {
  readonly id?: string;
  userId?: string;
  user: IUser;
  name: string;
  description: string;
  available: boolean;
  expiredAt: string;
  startedAt: string;
  price: number;
  features: string[];
  durationKind: DurationKind;
  billingCycleKind: BillingCycleKind;

  constructor(
    name: string,
    user: IUser,
    description: string,
    available: boolean,
    expiredAt: string,
    startedAt: string,
    price: number,
    features: string[],
    durationKind: DurationKind,
    billingCycleKind: BillingCycleKind,
  ) {
    this.name = name;
    this.user = user;
    this.description = description;
    this.available = available;
    this.expiredAt = expiredAt;
    this.startedAt = startedAt;
    this.price = price;
    this.features = features;
    this.durationKind = durationKind;
    this.billingCycleKind = billingCycleKind;
  }
}
