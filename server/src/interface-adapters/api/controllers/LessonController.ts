import { NextFunction } from 'express';
import { IServiceCradle } from '../../../appication/abstractions';
import { BaseController, TRequestBody, TResponse } from './BaseController';
import { ILessonResponseDto } from '../../../dto/lesson/ILessonResponseDto';
import { ICreateLessonDto } from '../../../dto/lesson/ICreateLessonDto';

export class LessonController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (
        req: TRequestBody<{}>,
        res: TResponse<{
            lessons: ILessonResponseDto[];
        }>,
        next: NextFunction
    ): Promise<TResponse<{ lessons: ILessonResponseDto[] }>> => {
        return this.wrap(async () => {
            const lessons = await this.service.lessonUseCases.GetAll();
            return res.json({ lessons });
        }, next);
    };

    public Create = async (
        req: TRequestBody<ICreateLessonDto>,
        res: TResponse<{response: ILessonResponseDto }>,
        next: NextFunction
    ): Promise<TResponse<{ response: ILessonResponseDto }>> => {
        return this.wrap(async () => {
            const response = await this.service.lessonUseCases.Create(req.body);
            return res.json({ response });
        }, next);
    };
}
