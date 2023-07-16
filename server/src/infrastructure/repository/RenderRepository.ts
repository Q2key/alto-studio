import { DataSource, Repository } from "typeorm";
import { IRender } from "../../domain/entities/Render/IRender";
import { IRenderRepo } from "../../domain/entities/Render/IRenderRepo";
import { IUser } from "../../domain/entities/User/IUser";
import { IUserRepo } from "../../domain/entities/User/IUserRepo";
import { IServiceCradle } from "../../interface";
import { RenderEntity } from "../entities/RenderEntity";
import { UserEntity } from "../entities/UserEntity";

export class RenderRepository implements IRenderRepo {
    private readonly ds: DataSource;
    private repo: Repository<RenderEntity>

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(RenderEntity);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(render: IRender): Promise<RenderEntity> {
        const created = await this.repo.save<IRender>(render);
        return Promise.resolve(created);
    }

    async findOne(id: number): Promise<RenderEntity> {
        throw ('not implemented');
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<RenderEntity[]> {
        const renders = await this.repo.find();
        return Promise.resolve(renders)
    };
}