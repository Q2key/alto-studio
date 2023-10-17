import { Subscription } from '../subscription/subscription.domain';

export interface ITariffPlan {
  readonly id?: string;
  name: string;
  description: string;
  enabled: boolean;
  includedSubscriptionIds: number[];
  subscriptions: Subscription[];
}
