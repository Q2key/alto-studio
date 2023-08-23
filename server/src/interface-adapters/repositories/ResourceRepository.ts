import { DataSource, Repository } from 'typeorm';
import { IServiceCradle } from '../../appication/abstractions';
import { IResourceRepository } from '../../appication/repository/IResourceRepo';
import { ResourceDB } from '../../frameworks/typeorm-entities/ResourceDB';
import { IResource } from '../../domain/resource/IResource';

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
