import { BillingCycleKind, DurationKind, ISubscriptionDto } from "./ISubscriptionDto";

export interface ICreateSubscriptionDto extends ISubscriptionDto {
    name: string;
    userId: string;
    description: string;
    available: boolean;
    startedAt: string;
    expiredAt: string;
    price: number;
    features: string[];
    durationKind: DurationKind;
    billingCycleKind: BillingCycleKind;
}