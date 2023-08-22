import { NextFunction } from 'express';
import { IServiceCradle } from '../../../appication/abstractions';
import { BaseController, TRequestBody, TResponse } from './BaseController';
import { IUserResponseDto } from '../../dto/user/IUserResponseDto';
import { IResourceResponseDto } from '../../dto/resource/IResourceResponseDto';

export class ResourceController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (
        req: TRequestBody<{}>,
        res: TResponse<{
            resources: IResourceResponseDto[];
        }>,
        next: NextFunction
    ): Promise<TResponse<{ resources: IResourceResponseDto[] }>> => {
        return this.wrap(async () => {
            const resources = await this.service.resourceUseCases.GetAll();
            return res.json({ resources });
        }, next);
    };

    public Upload = async (
        req: TRequestBody<{type: string}>,
        res: TResponse<{response: IResourceResponseDto }>,
        next: NextFunction
    ): Promise<TResponse<{ response: IResourceResponseDto }>> => {
        return this.wrap(async () => {
            const response = await this.service.resourceUseCases.Upload(req.file, req.body.type);
            return res.json({ response });
        }, next);
    };
}
