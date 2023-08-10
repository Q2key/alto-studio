import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { IUnitMapper } from '../../domain/mappers/IUnitMapper';
import { IUnitRepository } from '../../domain/repository/IUnitRepo';
import { ICreateUnitDto } from '../../dto/unit/ICreateUnitDto';
import { IUnitResponseDto } from '../../dto/unit/IUnitResponseDto';

export class UnitUseCases {
    private readonly repo: IUnitRepository;
    private readonly mapper: IUnitMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.unitRepository;
        this.mapper = cradle.unitMapper;
    }

    public async GetAll(): Promise<IUnitResponseDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async Create(dto: ICreateUnitDto): Promise<IUnitResponseDto> {
        const created = await this.repo.save({
            name: dto.name,
            description: dto.description,
            text: '',
            lessonId: ''
        });
        
        return Promise.resolve(
            this.mapper.toDTO(created)
        );
    }
}
