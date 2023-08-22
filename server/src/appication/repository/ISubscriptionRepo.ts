
import {SubscriptionDB} from "../../frameworks/typeorm-entities/SubscriptionDB";
import { Subscription } from "../../domain/Subscription/Subscription";

export interface ISubscriptionRepo {
    save(subscription: Subscription): Promise<SubscriptionDB>;
    update(id: string, subscription: Subscription): Promise<boolean>;
    findOne(id: string): Promise<Subscription>;
    find: (fromIndex?: number, count?: number) => Promise<Subscription[]>;
    deleteOne: (id: string) => Promise<boolean>;
}
