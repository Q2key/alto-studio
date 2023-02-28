import { IUseCase, IServiceCradle } from "../../../../interface";
import { IProjectDto } from "../../../entities/Project/IProject";
import { IProjectMapper } from "../../../entities/Project/IProjectMapper";
import { IProjectRepo } from "../../../entities/Project/IProjectRepo";
import { Project } from "../../../entities/Project/Project";

export class GetProjectsUseCase implements IUseCase<void, IProjectDto[]> {
    private readonly repo: IProjectRepo;
    private readonly mapper: IProjectMapper;

    constructor({ projectRepository, projectMapper }: IServiceCradle) {
        this.repo = projectRepository;
        this.mapper = projectMapper;
    }

    public execute = async (): Promise<IProjectDto[]> => {
        const projects = (await this.repo.find()).map(p => Project.Create(p.id, p.userId, p.name, p.startedAt, p.finishedAt));
        return Promise.resolve(projects.map(this.mapper.toDTO))
    }
}