import { NextFunction } from "express";
import { User } from "../../entity/User";
import { IServiceCradle } from "../../interface";
import { BaseController, TRequestBody, TResponse } from "./BaseController";

export class UserController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public Find = async (req: TRequestBody<{}>, res: TResponse<{ users: User[] }>, next: NextFunction): Promise<TResponse<{ users: User[] }>> => {
        return this.wrap(async () => {
            const users = await this.service.getUsersUseCase.execute()
            return res.json({ users })
        }, next);
    }
}