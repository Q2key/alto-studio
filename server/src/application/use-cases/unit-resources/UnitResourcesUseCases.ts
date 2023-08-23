import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { IUnitResourceMapper } from '../../mappers/IUnitResourceMapper';
import { IUnitResourceRepository } from '../../repository/IUnitResourceRepository';
import { ILessonResponseDto } from '../../../interface-adapters/dto/lesson/ILessonResponseDto';
import { ICreateUnitResourceDto } from '../../../interface-adapters/dto/unit-resource/ICreateUnitResourceDto';

export class UnitResourcesUseCases {
    private readonly repo: IUnitResourceRepository;
    private readonly mapper: IUnitResourceMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.unitResourceRepository;
        this.mapper = cradle.unitResourceMapper;
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