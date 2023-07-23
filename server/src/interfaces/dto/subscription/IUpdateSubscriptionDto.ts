import {ICreateSubscriptionDto} from "./ICreateSubscriptionDto";

export interface IUpdateSubscriptionDto {
    id: string;
    subscription: Omit<ICreateSubscriptionDto, 'id'>;
}