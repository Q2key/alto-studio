import { IMapper } from "../../infrastructure/mapper/IMapper";
import { IPlaneDto, IPlaneEntity } from "./IPlaneEntity";

export interface IPlaneMapper extends IMapper<IPlaneEntity, IPlaneDto> {
    toDTO(entity: IPlaneEntity): IPlaneDto;
}