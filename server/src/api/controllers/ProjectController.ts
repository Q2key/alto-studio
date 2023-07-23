import {NextFunction} from "express";
import {IServiceCradle} from "../../abstractions";
import {BaseController, TRequestBody, TResponse} from "./BaseController";
import { IProjectDto } from "../../dto/project/IProjectDto";
import { ICreateProjectDto } from "../../dto/project/ICreateProjectDto";

export class ProjectController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (req: TRequestBody<{}>, res: TResponse<{
        projects: IProjectDto[]
    }>, next: NextFunction): Promise<TResponse<{ projects: IProjectDto[] }>> => {
        return this.wrap(async () => {
            const projects = await this.service.projectUseCases.getAll();
            return res.json({projects});
        }, next);
    }


    public Create = async (req: TRequestBody<ICreateProjectDto>, res: TResponse<{
        project: IProjectDto
    }>, next: NextFunction): Promise<TResponse<{ project: IProjectDto }>> => {
        return this.wrap(async () => {
            const project = await this.service.projectUseCases.createNew(req.body)
            return res.json({project})
        }, next);
    }
}