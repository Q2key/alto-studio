import { DataSource, Repository } from 'typeorm';
import { IServiceCradle } from '../../abstractions';
import { IResourceRepository } from '../../domain/repository/IResourceRepo';
import { ResourceDB } from '../entities/ResourceDB';
import { IResource } from '../../domain/entities/Resource/IResource';

export class ResourceRepository implements IResourceRepository {
    private readonly ds: DataSource;
    private repo: Repository<ResourceDB>;

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(ResourceDB);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(project: IResource): Promise<ResourceDB> {
        const created = await this.repo.save<IResource>(project);
        return Promise.resolve(created);
    }

    async findOne(id: string): Promise<IResource> {
        const resource = await this.repo.findOne({where: {id}});
        return resource;
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<IResource[]> {
        const projects = await this.repo.find();
        return Promise.resolve(projects);
    }
}
