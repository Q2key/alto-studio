import { Subscription } from "../subscription/Subscription";
import { ITariffPlan } from "./ITariffPlan";

export class TariffPlan implements ITariffPlan {
    readonly id?: string;
    name: string;
    description: string;
    enabled: boolean;
    includedSubscriptionIds: number[];
    subscriptions: Subscription[];

    constructor(
        name: string,
        description: string,
        enabled: boolean,
        includedSubscriptionIds: number[],
        subscriptions: Subscription[],
    ) {
        this.name = name;
        this.description = description;
        this.enabled = enabled;
        this.includedSubscriptionIds = includedSubscriptionIds;
        this.subscriptions = subscriptions;
    }
}