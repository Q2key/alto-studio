import { IMapper } from "../abstractions/IMapper";
import { IUnitResponseDto } from "../../interface-adapters/dto/unit/IUnitResponseDto";
import { IUnit } from "../../domain/Unit/IUnit";

export interface IUnitMapper extends IMapper<IUnit, IUnitResponseDto> {
    toDTO(entity: IUnit): IUnitResponseDto;
}