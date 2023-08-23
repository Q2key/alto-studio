import { IMapper } from "../abstractions/IMapper";
import { IUnitResourceResponseDto } from "../../interface-adapters/dto/unit-resource/IUnitResourceResponseDto";
import { IUnitResource } from "../../domain/unit-resource/IUnitResource";

export interface IUnitResourceMapper extends IMapper<IUnitResource, IUnitResourceResponseDto> {
    toDTO(entity: IUnitResource): IUnitResourceResponseDto;
}