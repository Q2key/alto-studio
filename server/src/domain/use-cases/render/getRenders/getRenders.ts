import { IUseCase } from "../../../../interface";
import { IRenderDto } from "../../../entities/Render/IRender";

export class getRendersUseCase implements IUseCase<{}, IRenderDto> {
    execute: (payload: {}) => Promise<IRenderDto>;
}