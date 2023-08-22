import { IMapper } from "../abstractions/IMapper";
import { IUnitResourceResponseDto } from "../../dto/unitResource/IUnitResourceResponseDto";
import { IUnitResource } from "../../domain/UnitResource/IUnitResource";

export interface IUnitResourceMapper extends IMapper<IUnitResource, IUnitResourceResponseDto> {
    toDTO(entity: IUnitResource): IUnitResourceResponseDto;
}