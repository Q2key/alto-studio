import { IServiceCradle, IUseCase } from "../../../../interface";
import { IProjectDto } from "../../../entities/Project/IProject";
import { IProjectMapper } from "../../../entities/Project/IProjectMapper";
import { IProjectRepo } from "../../../entities/Project/IProjectRepo";
import { Project } from "../../../entities/Project/Project";
import { IProjectInput } from "./addProjectInput";

export class AddProjectsUseCase implements IUseCase<IProjectInput, IProjectDto> {
    private readonly repo: IProjectRepo;
    private readonly mapper: IProjectMapper;

    constructor({projectRepository, projectMapper}: IServiceCradle) {
        this.repo = projectRepository;
        this.mapper = projectMapper;
    }

    public execute = async ({userId, name, startedAt, finishedAt}: IProjectInput): Promise<IProjectDto> => {
        const project = (await this.repo.save(Project.Create(userId,name, startedAt, finishedAt)));
        return Promise.resolve(this.mapper.toDTO(project));
    }
}