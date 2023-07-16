import {NextFunction} from "express";
import {IUserDto} from "../../domain/entities/User/IUser";
import {ICreateUserInput} from "../../domain/use-cases/user/createUser/createUserInput";
import {IServiceCradle} from "../../interface";
import {BaseController, TRequestBody, TResponse} from "./BaseController";

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
            const users = await this.service.getUsersUseCase.execute()
            return res.json({users})
        }, next);
    }


    public Create = async (req: TRequestBody<ICreateUserInput>, res: TResponse<{
        user: IUserDto
    }>, next: NextFunction): Promise<TResponse<{ user: IUserDto }>> => {
        return this.wrap(async () => {
            const user = await this.service.createUserUseCase.execute(req.body)
            return res.json({user})
        }, next);
    }
}