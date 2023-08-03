import { IMapper } from "../../abstractions/IMapper";
import { IResourceResponseDto } from "../../dto/resource/IResourceResponseDto";
import { IResource } from "../entities/Resource/IResource";

export interface IResourceMapper extends IMapper<IResource, IResourceResponseDto> {
    toDTO(entity: IResource): IResourceResponseDto;
}