import { IServiceCradle, IUseCase } from "../../../../interface";
import { IRenderDto } from "../../../entities/Render/IRender";
import { IRenderMapper } from "../../../entities/Render/IRenderMapper";
import { IRenderRepo } from "../../../entities/Render/IRenderRepo";
import { Render } from "../../../entities/Render/Render";

export class GetRendersUseCase implements IUseCase<void, IRenderDto[]> {
    private readonly repo: IRenderRepo;
    private readonly mapper: IRenderMapper;

    constructor({ renderRepository, renderMapper }: IServiceCradle) {
        this.repo = renderRepository;
        this.mapper = renderMapper;
    }

    public execute = async (): Promise<IRenderDto[]> => {
        const renders = (await this.repo.find()).map(r => Render.Create(r.id, r.meta, r.name, r.src))
        return Promise.resolve(renders.map(this.mapper.toDTO));
    }
}