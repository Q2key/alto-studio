import { NextFunction } from 'express';
import { IServiceCradle } from '../../abstractions';
import { BaseController, TRequestBody, TResponse } from './BaseController';
import { ILessonResponseDto } from '../../dto/lesson/ILessonResponseDto';
import { ICreateLessonDto } from '../../dto/lesson/ICreateLessonDto';
import { ICreateCourseDto } from '../../dto/course/ICreateCourseDto';
import { ICourseResponseDto } from '../../dto/course/ICourseResponseDto';

export class CourseController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (
        req: TRequestBody<{}>,
        res: TResponse<{
            courses: ICourseResponseDto[];
        }>,
        next: NextFunction
    ): Promise<TResponse<{ courses: ICourseResponseDto[] }>> => {
        return this.wrap(async () => {
            const courses = await this.service.courseUseCases.GetAll();
            return res.json({ courses });
        }, next);
    };

    public Create = async (
        req: TRequestBody<ICreateCourseDto>,
        res: TResponse<{courses: ICourseResponseDto }>,
        next: NextFunction
    ): Promise<TResponse<{ courses: ILessonResponseDto }>> => {
        return this.wrap(async () => {
            const courses = await this.service.courseUseCases.Create(req.body);
            return res.json({ courses });
        }, next);
    };
}
