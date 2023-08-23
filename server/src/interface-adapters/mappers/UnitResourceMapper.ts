import { IUnitResource } from "../../domain/unit-resource/IUnitResource";
import { IUnitResourceMapper } from "../../appication/mappers/IUnitResourceMapper";
import { IUnitResourceResponseDto } from "../dto/unit-resource/IUnitResourceResponseDto";

export class UnitResourceMapper implements IUnitResourceMapper
 {
    toDTO(entity: IUnitResource): IUnitResourceResponseDto {
        return entity as IUnitResourceResponseDto
    }
}