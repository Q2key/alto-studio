import { IUnitResource } from "../../domain/UnitResource/IUnitResource";
import { IUnitResourceMapper } from "../../appication/mappers/IUnitResourceMapper";
import { IUnitResourceResponseDto } from "../../dto/unitResource/IUnitResourceResponseDto";

export class UnitResourceMapper implements IUnitResourceMapper
 {
    toDTO(entity: IUnitResource): IUnitResourceResponseDto {
        return entity as IUnitResourceResponseDto
    }
}