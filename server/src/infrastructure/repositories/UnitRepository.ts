import { DataSource, Repository } from 'typeorm';
import { IServiceCradle } from '../../abstractions';
import { IUnitRepository } from '../../domain/repository/IUnitRepo';
import { IUnit } from '../../domain/entities/Unit/IUnit';
import { UnitDB } from '../entities/UnitDB';

export class UnitRepository implements IUnitRepository {
    private readonly ds: DataSource;
    private repo: Repository<UnitDB>;

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(UnitDB);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(e: IUnit): Promise<UnitDB> {
        const created = await this.repo.save<IUnit>(e);
        return Promise.resolve(created);
    }

    async findOne(id: number): Promise<IUnit> {
        throw 'not implemented';
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<IUnit[]> {
        const entities = await this.repo.find();
        return Promise.resolve(entities);
    }
}
