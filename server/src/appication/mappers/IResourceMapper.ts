import { IMapper } from "../abstractions/IMapper";
import { IResourceResponseDto } from "../../interface-adapters/dto/resource/IResourceResponseDto";
import { IResource } from "../../domain/Resource/IResource";

export interface IResourceMapper extends IMapper<IResource, IResourceResponseDto> {
    toDTO(entity: IResource): IResourceResponseDto;
}