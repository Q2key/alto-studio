import { IUseCase } from "../../../../interface";
import { IRenderDto } from "../../../entities/Render/IRender";

export class uploadRenderUseCase implements IUseCase<IUploadRenderInput, IRenderDto> {
    execute: (payload: {}) => Promise<IRenderDto>;
}