import { NextFunction } from "express";
import { IUserDto } from "../../domain/User/IUserEntity";
import { IServiceCradle } from "../../interface";
import { BaseController, TRequestBody, TResponse } from "./BaseController";

export class UserController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public Find = async (req: TRequestBody<{}>, res: TResponse<{ users: IUserDto[] }>, next: NextFunction): Promise<TResponse<{ users: IUserDto[] }>> => {
        return this.wrap(async () => {
            const users = await this.service.getUsersUseCase.execute()
            return res.json({ users })
        }, next);
    }
}