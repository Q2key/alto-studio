import { IRender, IRenderDto } from "../../domain/entities/Render/IRender";
import { IRenderMapper } from "../../domain/entities/Render/IRenderMapper";

export class RenderMapper implements IRenderMapper {
    toDTO(entity: IRender): IRenderDto {
        return entity as IRenderDto;
    }
}