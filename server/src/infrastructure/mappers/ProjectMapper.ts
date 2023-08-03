import { IResource } from "../../domain/entities/Resource/IResource";
import { IResourceMapper } from "../../domain/mappers/IResourceMapper";
import { IResourceResponseDto } from "../../dto/resource/IResourceResponseDto";

export class ResourceMapper implements IResourceMapper
 {
    toDTO(entity: IResource): IResourceResponseDto {
        return entity as IResourceResponseDto;
    }
}