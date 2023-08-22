import {NextFunction} from "express";
import {ICreateUserDto} from "../../../dto/user/ICreateUserDto";
import {IServiceCradle} from "../../../appication/abstractions";
import {BaseController, TRequestBody, TResponse} from "./BaseController";
import { IUserResponseDto } from "../../../dto/user/IUserResponseDto";
import { IDeleteUserDto } from "../../../dto/user/IDeleteUserDto";
import { IUpdateUserDto } from "../../../dto/user/IUpdateUserDto";

export class UserController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (req: TRequestBody<{}>, res: TResponse<{
        users: IUserResponseDto[]
    }>, next: NextFunction): Promise<TResponse<{ users: IUserResponseDto[] }>> => {
        return this.wrap(async () => {
            const users = await this.service.userUseCases.getAll()
            return res.json({users})
        }, next);
    }

    public Create = async (req: TRequestBody<ICreateUserDto>, res: TResponse<{
        user: IUserResponseDto
    }>, next: NextFunction): Promise<TResponse<{ user: IUserResponseDto }>> => {
        return this.wrap(async () => {
            const user = await this.service.userUseCases.create(req.body)
            return res.json({user})
        }, next);
    }

    public Update = async (req: TRequestBody<IUpdateUserDto>, res: TResponse<{
        updated: boolean
    }>, next: NextFunction): Promise<TResponse<{ updated: boolean }>> => {
        return this.wrap(async () => {
            const updated = await this.service.userUseCases.update(req.body)
            return res.json({updated})
        }, next);
    }

    public Delete = async (req: TRequestBody<IDeleteUserDto>, res: TResponse<{
        deleted: boolean
    }>, next: NextFunction): Promise<TResponse<{ deleted: boolean }>> => {
        return this.wrap(async () => {
            const deleted = await this.service.userUseCases.deleteUser(req.body)
            return res.json({deleted})
        }, next);
    }
}