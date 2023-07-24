import { ITariffPlan } from "./ITariffPlan";

export class TariffPlan implements ITariffPlan {
    readonly id?: string;
    name: string;
    description: string;
    enabled: boolean;
    includedSubscriptionIds: number[];

    constructor(
        name: string,
        description: string,
        enabled: boolean,
        includedSubscriptionIds: number[]
    ) {
        this.name = name;
        this.description = description;
        this.enabled = enabled;
        this.includedSubscriptionIds = includedSubscriptionIds;
    }
}