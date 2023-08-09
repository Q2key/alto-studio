import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { IResource } from '../../domain/entities/Resource/IResource';
import { IResourceMapper } from '../../domain/mappers/IResourceMapper';
import { IResourceRepository } from '../../domain/repository/IResourceRepo';
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
        size,
    }: IUploadResourceInput, 
    type: string): Promise<IResourceResponseDto> {
        
        const resource = await this.repo.save({
            name: filename,
            originalName: originalname,
            mimeType: mimetype,
            type: type,
            src: destination,
            size: size,
            available: true,
        } as IResource);

        return Promise.resolve(this.mapper.toDTO(resource));
    }
}
