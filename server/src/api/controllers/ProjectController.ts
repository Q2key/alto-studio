import {NextFunction} from "express";
import {IProjectDto} from "../../domain/entities/Project/IProject";
import {IProjectInput} from "../../domain/use-cases/project/addProject/addProjectInput";
import {IServiceCradle} from "../../interface";
import {BaseController, TRequestBody, TResponse} from "./BaseController";

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
            const projects = await this.service.getProjectsUseCase.execute()
            return res.json({projects});
        }, next);
    }


    public Create = async (req: TRequestBody<IProjectInput>, res: TResponse<{
        project: IProjectDto
    }>, next: NextFunction): Promise<TResponse<{ project: IProjectDto }>> => {
        return this.wrap(async () => {
            const project = await this.service.createProjectsUseCase.execute(req.body)
            return res.json({project})
        }, next);
    }
}