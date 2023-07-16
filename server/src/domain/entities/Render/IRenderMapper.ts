import {IMapper} from "../../../infrastructure/mapper/IMapper";
import {IRenderDto, IRender} from "./IRender";
import {RenderEntity} from "../../../infrastructure/entities/RenderEntity";

export interface IRenderMapper extends IMapper<RenderEntity, IRenderDto> {
    toDTO(entity: RenderEntity): IRenderDto;
}