import { DataSource, Repository } from "typeorm";
import { IProject,  } from "../../domain/entities/Project/IProject";
import { IProjectRepo } from "../../domain/entities/Project/IProjectRepo";
import { IServiceCradle } from "../../interface";
import { ProjectEntity } from "../entities/ProjectEntity";

export class ProjectRepository implements IProjectRepo {
    private readonly ds: DataSource;
    private repo: Repository<ProjectEntity>

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        String.prototype
        this.repo = this.ds.getRepository(ProjectEntity);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(user: IProject): Promise<IProject> {
        const created = await this.repo.save<IProject>(user);
        return Promise.resolve(created);
    }

    async findOne(id: number): Promise<IProject> {
        throw ('not implemented');
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<IProject[]> {
        const projects = await this.repo.find();
        return Promise.resolve(projects)
    };
}