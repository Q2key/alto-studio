import { IMapper } from "../../infrastructure/mapper/IMapper";
import { IRenderDto, IRenderEntity } from "./IRender";

export interface IRenderMapper extends IMapper<IRenderEntity, IRenderDto> {
    toDTO(entity: IRenderEntity): IRenderDto;
}