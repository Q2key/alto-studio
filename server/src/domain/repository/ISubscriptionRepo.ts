
import {SubscriptionEntity} from "../../infrastructure/entities/SubscriptionEntity";
import { Subscription } from "../entities/Subscription/Subscription";

export interface ISubscriptionRepo {
    save(subscription: Subscription): Promise<SubscriptionEntity>;
    update(id: string, subscription: Subscription): Promise<boolean>;
    findOne(id: string): Promise<Subscription>;
    find: (fromIndex?: number, count?: number) => Promise<Subscription[]>;
    deleteOne: (id: string) => Promise<boolean>;
}
