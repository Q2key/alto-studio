import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { IResource } from '../../domain/entities/Resource/IResource';
import { IResourceMapper } from '../../domain/mappers/IResourceMapper';
import { IResourceRepository } from '../../domain/repository/IResourceRepo';
import { ICreateResourceDto } from '../../dto/resource/ICreateResourceDto';
import { IResourceResponseDto } from '../../dto/resource/IResourceResponseDto';
import { IUploadResourceInput } from './IUploadResourceInput';

export class ResourceUseCases {
    private readonly repo: IResourceRepository;
    private readonly mapper: IResourceMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.resourceRepository;
        this.mapper = cradle.resourceMapper;
    }

    public async GetAll(): Promise<IResourceResponseDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async Upload({
        filename,
        originalname,
        mimetype,
        destination,
        path,
        size,
    }: IUploadResourceInput): Promise<IResourceResponseDto> {
        const resource = await this.repo.save({
            name: filename,
            originalName: originalname,
            type: mimetype,
            src: destination,
            size: size,
            available: true,
        } as IResource);

        return Promise.resolve(this.mapper.toDTO(resource));
    }
}
