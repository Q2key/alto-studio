import {NextFunction} from "express";
import {IServiceCradle} from "../../abstractions";
import {BaseController, TRequestBody, TResponse} from "./BaseController";
import {ISubscribtionDto} from "../../interfaces/dto/subscription/ISubscribtionDto";
import {ICreateSubscriptionDto} from "../../interfaces/dto/subscription/ICreateSubscriptionDto";
import {IUpdateSubscriptionDto} from "../../interfaces/dto/subscription/IUpdateSubscriptionDto";
import {IDeleteSubscriptionDto} from "../../interfaces/dto/subscription/IDeleteSubscriptionDto";

export class SubscriptionController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (req: TRequestBody<{}>, res: TResponse<{
        subscriptions: ISubscribtionDto[]
    }>, next: NextFunction): Promise<TResponse<{ subscriptions: ISubscribtionDto[] }>> => {
        return this.wrap(async () => {
            const subscriptions = await this.service.subscriptionUseCases.getAll()
            return res.json({subscriptions})
        }, next);
    }

    public Create = async (req: TRequestBody<ICreateSubscriptionDto>, res: TResponse<{
        subscription: ISubscribtionDto
    }>, next: NextFunction): Promise<TResponse<{ subscription: ISubscribtionDto }>> => {
        return this.wrap(async () => {
            const subscription = await this.service.subscriptionUseCases.create(req.body)
            return res.json({subscription})
        }, next);
    }

    public Update = async (req: TRequestBody<IUpdateSubscriptionDto>, res: TResponse<{
        updated: boolean
    }>, next: NextFunction): Promise<TResponse<{ updated: boolean }>> => {
        return this.wrap(async () => {
            const updated = await this.service.subscriptionUseCases.update(req.body)
            return res.json({updated})
        }, next);
    }

    public Delete = async (req: TRequestBody<IDeleteSubscriptionDto>, res: TResponse<{
        deleted: boolean
    }>, next: NextFunction): Promise<TResponse<{ deleted: boolean }>> => {
        return this.wrap(async () => {
            const deleted = await this.service.subscriptionUseCases.deleteUser(req.body)
            return res.json({deleted})
        }, next);
    }
}