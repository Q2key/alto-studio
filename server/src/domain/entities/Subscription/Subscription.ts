import { BillingCycleKind, DurationKind, ISubscription } from "./ISubscription";

export class Subscription implements ISubscription {
    readonly id?: string;
    name: string;
    description: string;
    enabled: boolean;
    expiredAt: string;
    startedAt: string;
    price: number;
    features: string[];
    durationKind: DurationKind;
    billingCycleKind: BillingCycleKind;

    constructor(
        name: string,
        description: string,
        enabled: boolean,
        expiredAt: string,
        startedAt: string,
        price: number,
        features: string[],
        durationKind: DurationKind,
        billingCycleKind: BillingCycleKind,
    ) {
        this.name = name;
        this.description = description;
        this.enabled = enabled;
        this.expiredAt = expiredAt;
        this.startedAt = startedAt;
        this.price = price;
        this.features = features;
        this.durationKind = durationKind;
        this.billingCycleKind = billingCycleKind;
    }
}