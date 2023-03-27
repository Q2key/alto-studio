import { IServiceCradle, IUseCase } from "../../../../interface";
import { IRenderDto } from "../../../entities/Render/IRender";
import { IRenderMapper } from "../../../entities/Render/IRenderMapper";
import { IRenderRepo } from "../../../entities/Render/IRenderRepo";
import { Render } from "../../../entities/Render/Render";
import { IUploadRenderInput } from "./uploadRenderInput";

export class UploadRenderUseCase implements IUseCase<IUploadRenderInput, IRenderDto> {
    private readonly repo: IRenderRepo;
    private readonly mapper: IRenderMapper;

    constructor({ renderRepository, renderMapper }: IServiceCradle) {
        this.repo = renderRepository;
        this.mapper = renderMapper;
    }

    public execute = async ({projectId, src, name, meta }: IUploadRenderInput): Promise<IRenderDto> => {
        const render = await this.repo.save(Render.Create(projectId, src, name, meta))
        return Promise.resolve(this.mapper.toDTO(render));
    }
}