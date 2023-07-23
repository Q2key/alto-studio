import {NextFunction} from "express";
import {ICreateUserDto} from "../../interfaces/dto/ICreateUserDto";
import {IServiceCradle} from "../../abstractions";
import {BaseController, TRequestBody, TResponse} from "./BaseController";
import { IUserDto } from "../../interfaces/dto/IUserDto";

export class UserController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (req: TRequestBody<{}>, res: TResponse<{
        users: IUserDto[]
    }>, next: NextFunction): Promise<TResponse<{ users: IUserDto[] }>> => {
        return this.wrap(async () => {
            const users = await this.service.userUseCases.getAll()
            return res.json({users})
        }, next);
    }


    public Create = async (req: TRequestBody<ICreateUserDto>, res: TResponse<{
        user: IUserDto
    }>, next: NextFunction): Promise<TResponse<{ user: IUserDto }>> => {
        return this.wrap(async () => {
            const user = await this.service.userUseCases.createNew(req.body)
            return res.json({user})
        }, next);
    }
}