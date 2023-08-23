import { IResource } from "../../domain/resource/IResource";
import { IResourceMapper } from "../../appication/mappers/IResourceMapper";
import { IResourceResponseDto } from "../dto/resource/IResourceResponseDto";

export class ResourceMapper implements IResourceMapper
 {
    toDTO(entity: IResource): IResourceResponseDto {
        return entity as IResourceResponseDto
    }
}