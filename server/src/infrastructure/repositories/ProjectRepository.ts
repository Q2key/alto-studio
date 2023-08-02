import { DataSource, Repository } from "typeorm";
import { IProjectRepo } from "../../domain/repository/IProjectRepo";
import { IServiceCradle } from "../../abstractions";
import { ProjectEntity } from "../entities/ProjectEntity";
import { Project } from "../../domain/entities/Project/Project";

export class ProjectRepository implements IProjectRepo {
    private readonly ds: DataSource;
    private repo: Repository<ProjectEntity>

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(ProjectEntity);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(project: Project): Promise<ProjectEntity> {
        const created = await this.repo.save<Project>(project);
        return Promise.resolve(created);
    }

    async findOne(id: number): Promise<ProjectEntity> {
        throw ('not implemented');
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<ProjectEntity[]> {
        const projects = await this.repo.find();
        return Promise.resolve(projects)
    };
}