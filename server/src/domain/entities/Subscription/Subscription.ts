import {ISubscription} from "./ISubscription";

export class Subscription implements ISubscription {
    readonly id?: string;
    name: string;
    available: boolean;
    description: string;

    constructor(
        name: string,
        available: boolean,
        description: string,
    ) {
        this.name = name;
        this.available = available;
        this.description = description;
    }
}