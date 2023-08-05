import { IResourceResponseDto } from "../dto/resource/IResourceResponseDto";
import { ICreateSubscriptionDto } from "../dto/subscription/ICreateSubscriptionDto";
import { ISubscriptionDto } from "../dto/subscription/ISubscriptionDto";

interface IClient  {
    host: string;
    get: <TResp, TParam>(url: string, params?: TParam) => Promise<TResp>;
}


class FetchApiClient implements IClient {
    private readonly _host: string;

    constructor(host: string) {
        this._host = host;
    }

    get host(): string {
        return this._host;
    }

    async get<TResp, TParam>(url: string, params: TParam): Promise<TResp> {
        const data = await fetch(`${this._host}${url}`);
        return await data.json() as TResp;
    }

    async post<TResp, TBody>(url: string, body: TBody): Promise<TResp> {
        const data = await fetch(`${this._host}${url}`);
        return await data.json() as TResp;
    }

    static MakeClient (host: string):FetchApiClient {
        return new FetchApiClient(host);
    }
}

const apiClient: IClient = FetchApiClient.MakeClient('http://localhost:5000');

export class SubscriptionClient {
    
    static loadSubscriptions = async (): Promise<any[]> => {
        const result = await apiClient.get<{subscriptions: ISubscriptionDto[]}, unknown>('/subscriptions');
        return result.subscriptions;
    }

    static createSubscription = async (subscription: ICreateSubscriptionDto): Promise<any[]> => {
        return Promise.resolve([])
    }
}

export class ResourceClient {

    static loadResources = async (): Promise<any[]> => {
        const result = await apiClient.get<{resources: IResourceResponseDto[]}, unknown>('/resources');
        return result.resources;
    }

    static getResourcePath = (fileName: string) : string => {
        return `${apiClient.host}/static/${fileName}`;
    }

    static createSubscription = async (subscription: ICreateSubscriptionDto): Promise<any[]> => {
        return Promise.resolve([])
    }
}