import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { IUnitMapper } from '../../domain/mappers/IUnitMapper';
import { ILessonRepository } from '../../domain/repository/ILessonRepo';
import { IResourceRepository } from '../../domain/repository/IResourceRepo';
import { IUnitRepository } from '../../domain/repository/IUnitRepo';
import { IUnitResourceRepository } from '../../domain/repository/IUnitResourceRepository';
import { ICreateUnitDto } from '../../dto/unit/ICreateUnitDto';
import { IUnitResponseDto } from '../../dto/unit/IUnitResponseDto';

export class UnitUseCases {
    private readonly repo: IUnitRepository;
    private readonly lessonRepo: ILessonRepository;
    private readonly resourcesRepo: IResourceRepository;
    private readonly unitResourceRepo: IUnitResourceRepository;

    private readonly mapper: IUnitMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.unitRepository;
        this.lessonRepo = cradle.lessonRepository;
        this.resourcesRepo = cradle.resourceRepository;
        this.unitResourceRepo = cradle.UnitResourceRepository;
        this.mapper = cradle.unitMapper;
    }

    public async GetAll(): Promise<IUnitResponseDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async Create({name, description, text, lessonId, resourceIds}: ICreateUnitDto): Promise<IUnitResponseDto> {
        const lesson = await this.lessonRepo.findOne(lessonId);
        

        const created = await this.repo.save({
            name, description, text, lesson: lesson,
        });

        const resources = [];
        for (const resourceId of resourceIds){
            const lr = await this.resourcesRepo.findOne(resourceId)

            await this.unitResourceRepo.save({unitId: created.id, resourceId, type: ''})
            resources.push(lr);
        }


         
        return Promise.resolve(
            this.mapper.toDTO(created)
        );
    }
}
