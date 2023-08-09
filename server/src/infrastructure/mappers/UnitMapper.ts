import { IUnit } from "../../domain/entities/Unit/IUnit";
import { IUnitMapper } from "../../domain/mappers/IUnitMapper";
import { IUnitResponseDto } from "../../dto/unit/IUnitResponseDto";

export class UnitMapper implements IUnitMapper
 {
    toDTO(entity: IUnit): IUnitResponseDto {
        return entity as IUnitResponseDto
    }
}