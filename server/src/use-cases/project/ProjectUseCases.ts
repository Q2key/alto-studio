import { IServiceCradle } from "../../abstractions";
import { ICreateProjectDto } from "../../core/dto/ICreateProjectDto";
import { IProjectDto } from "../../core/dto/IProjectDto";
import { IProjectMapper } from "../../core/mapper/IProjectMapper";
import { IProjectRepo } from "../../core/repository/IProjectRepo";

export class ProjectUseCases {
    private readonly repo: IProjectRepo;
    private readonly mapper: IProjectMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.projectRepository;
        this.mapper = cradle.projectMapper;
    }

    public async getAll(): Promise<IProjectDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async createNew({id, firstName, userId}: ICreateProjectDto): Promise<IProjectDto> {
        const user = await this.repo.save({name: firstName, userId});
        return Promise.resolve(this.mapper.toDTO(user));
    }

    public async deleteUser({id}: ICreateProjectDto): Promise<boolean> {
        const deleted = await this.repo.deleteOne(id);
        return Promise.resolve(deleted);
    }

    public async updateUser({id, firstName, userId}: ICreateProjectDto): Promise<IProjectDto> {
        const user = await this.repo.save({name: firstName, userId});
        return Promise.resolve(this.mapper.toDTO(user));
    }
}