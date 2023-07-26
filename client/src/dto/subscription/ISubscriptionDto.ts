export enum DurationKind {
    Daily,
    Monthly,
    Early,
}

export enum BillingCycleKind {
    Daily,
    Monthly,
    Early,
    Instant,
    Free,
}

export interface ISubscriptionDto {
    readonly id?: string;
    name: string;
    description: string;
    available: boolean;
    startedAt: string;
    expiredAt: string;
    price: number;
    features: string[];
    durationKind: DurationKind;
    billingCycleKind: BillingCycleKind;
}