import { IUnit } from "../../domain/unit/IUnit";
import { IUnitMapper } from "../../application/mappers/IUnitMapper";
import { IUnitResponseDto } from "../dto/unit/IUnitResponseDto";

export class UnitMapper implements IUnitMapper
 {
    toDTO(entity: IUnit): IUnitResponseDto {
        return entity as IUnitResponseDto
    }
}