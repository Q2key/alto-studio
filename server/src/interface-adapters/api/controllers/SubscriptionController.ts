import { NextFunction } from "express";
import { IServiceCradle } from "../../../appication/abstractions";
import { ICreateSubscriptionDto } from "../../dto/subscription/ICreateSubscriptionDto";
import { IDeleteSubscriptionDto } from "../../dto/subscription/IDeleteSubscriptionDto";
import { ISubscriptionDto } from "../../dto/subscription/ISubscriptionDto";
import { IUpdateSubscriptionDto } from "../../dto/subscription/IUpdateSubscriptionDto";
import { BaseController, TRequestBody, TResponse } from "./BaseController";

export class SubscriptionController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (req: TRequestBody<{}>, res: TResponse<{
        subscriptions: ISubscriptionDto[]
    }>, next: NextFunction): Promise<TResponse<{ subscriptions: ISubscriptionDto[] }>> => {
        return this.wrap(async () => {
            const subscriptions = await this.service.subscriptionUseCases.getAll()
            return res.json({subscriptions})
        }, next);
    }

    public Create = async (req: TRequestBody<ICreateSubscriptionDto>, res: TResponse<{
        subscription: ISubscriptionDto
    }>, next: NextFunction): Promise<TResponse<{ subscription: ISubscriptionDto }>> => {
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