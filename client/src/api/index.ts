import { ICreateSubscriptionDto } from "../dto/subscription/ICreateSubscriptionDto";
import { ISubscriptionDto } from "../dto/subscription/ISubscriptionDto";

interface IClient  {
    get: <TResp, TParam>(url: string, params?: TParam) => Promise<TResp>;
}


class FetchApiClient implements IClient {
    private readonly baseUrl = 'http://localhost:5000';
    async get<TResp, TParam>(url: string, params: TParam): Promise<TResp> {
        const data = await fetch(`${this.baseUrl}${url}`);
        return await data.json() as TResp;
    }

    async post<TResp, TBody>(url: string, body: TBody): Promise<TResp> {
        const data = await fetch(`${this.baseUrl}${url}`);
        return await data.json() as TResp;
    }

    static MakeClient ():FetchApiClient {
        return new FetchApiClient();
    }
}


const apiClient: IClient = FetchApiClient.MakeClient();

export class SubscriptionClient {

    static loadSubscriptions = async (): Promise<any[]> => {
        const result = await apiClient.get<{subscriptions: ISubscriptionDto[]}, unknown>('/subscriptions');
        return result.subscriptions;
    }

    static createSubscription = async (subscription: ICreateSubscriptionDto): Promise<any[]> => {
        return Promise.resolve([])
    }
}