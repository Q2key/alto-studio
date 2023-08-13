import { DataSource, Repository } from 'typeorm';
import { IServiceCradle } from '../../abstractions';
import { IUnitResource } from '../../domain/entities/UnitResource/IUnitResource';
import { UnitResourceDB } from '../entities/UnitResourceDB';
import { IUnitResourceRepository } from '../../domain/repository/IUnitResourceRepository';

export class UnitResourceRepository implements IUnitResourceRepository {
    private readonly ds: DataSource;
    private repo: Repository<UnitResourceDB>;

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(UnitResourceDB);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(e: IUnitResource): Promise<UnitResourceDB> {
        const created = await this.repo.save<IUnitResource>(e);
        return Promise.resolve(created);
    }

    async findOne(id: string): Promise<IUnitResource> {
        const UnitResource = await this.repo.findOne({where: {id}});
        return Promise.resolve(UnitResource);

    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<IUnitResource[]> {
        const entities = await this.repo.find();
        return Promise.resolve(entities);
    }
}
