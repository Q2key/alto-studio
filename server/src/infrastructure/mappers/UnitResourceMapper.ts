import { IUnitResource } from "../../domain/entities/UnitResource/IUnitResource";
import { IUnitResourceMapper } from "../../domain/mappers/IUnitResourceMapper";
import { IUnitResourceResponseDto } from "../../dto/unitResource/IUnitResourceResponseDto";

export class UnitResourceMapper implements IUnitResourceMapper
 {
    toDTO(entity: IUnitResource): IUnitResourceResponseDto {
        return entity as IUnitResourceResponseDto
    }
}