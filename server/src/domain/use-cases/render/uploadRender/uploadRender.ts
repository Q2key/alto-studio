import { IUseCase } from "../../../../interface";
import { IRenderDto } from "../../../Render/IRenderEntity";

export class uploadRenderUseCase implements IUseCase<IUploadRenderInput, IRenderDto> {
    execute: (payload: {}) => Promise<IRenderDto>;
}