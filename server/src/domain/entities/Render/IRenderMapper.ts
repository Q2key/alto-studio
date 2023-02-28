import { IMapper } from "../../../infrastructure/mapper/IMapper";
import { IRenderDto, IRender } from "./IRender";

export interface IRenderMapper extends IMapper<IRender, IRenderDto> {
    toDTO(entity: IRender): IRenderDto;
}