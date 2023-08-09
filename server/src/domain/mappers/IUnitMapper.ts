import { IMapper } from "../../abstractions/IMapper";
import { IUnitResponseDto } from "../../dto/unit/IUnitResponseDto";
import { IUnit } from "../entities/Unit/IUnit";

export interface IUnitMapper extends IMapper<IUnit, IUnitResponseDto> {
    toDTO(entity: IUnit): IUnitResponseDto;
}