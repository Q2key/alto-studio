import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { IUnitResourceMapper } from '../../domain/mappers/IUnitResourceMapper';
import { IUnitResourceRepository } from '../../domain/repository/IUnitResourceRepository';
import { ILessonResponseDto } from '../../dto/lesson/ILessonResponseDto';
import { ICreateUnitResourceDto } from '../../dto/unitResource/ICreateUnitResourceDto';

export class UnitResourcesUseCases {
    private readonly repo: IUnitResourceRepository;
    private readonly mapper: IUnitResourceMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.UnitResourceRepository;
        this.mapper = cradle.UnitResourceMapper;
    }

    public async GetAll(): Promise<ILessonResponseDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async Create({unitId, resourceId, type}: ICreateUnitResourceDto): Promise<ILessonResponseDto> {
        return Promise.resolve(
            this.mapper.toDTO({ unitId, resourceId, type })
        );
    }
}
