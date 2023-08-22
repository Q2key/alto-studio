import { NextFunction } from 'express';
import { IServiceCradle } from '../../../appication/abstractions';
import { IUnitResponseDto } from '../../dto/unit/IUnitResponseDto';
import { BaseController, TRequestBody, TResponse } from './BaseController';
import { ICreateUnitDto } from '../../dto/unit/ICreateUnitDto';

export class UnitController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (
        req: TRequestBody<{}>,
        res: TResponse<{
            units: IUnitResponseDto[];
        }>,
        next: NextFunction
    ): Promise<TResponse<{ units: IUnitResponseDto[] }>> => {
        return this.wrap(async () => {
            const units = await this.service.unitUseCases.GetAll();
            return res.json({ units });
        }, next);
    };

    public Create = async (
        req: TRequestBody<ICreateUnitDto>,
        res: TResponse<{response: IUnitResponseDto }>,
        next: NextFunction
    ): Promise<TResponse<{ response: IUnitResponseDto }>> => {
        return this.wrap(async () => {
            const response = await this.service.unitUseCases.Create(req.body);
            return res.json({ response });
        }, next);
    };
}
