import { IUser } from '../user/IUser';

export enum DurationKind {
    Daily= 'Daily',
    Monthly = 'Monthly',
    Early = 'Early',
}

export enum BillingCycleKind {
    Daily = 'Daily',
    Monthly = 'Monthly',
    Early = 'Early',
    Instant = 'Instant',
    Free = 'Free',
}

export interface ISubscription {
    readonly id?: string;
    userId?: string;
    user: IUser;
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