import { Subscription } from "../subscription/Subscription";

export interface ITariffPlan {
    readonly id?: string;
    name: string;
    description: string;
    enabled: boolean;
    includedSubscriptionIds: number[]; 
    subscriptions: Subscription[];
}