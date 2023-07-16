import { IServiceCradle, IUseCase } from "../../../../interface";
import { IRenderDto } from "../../../entities/Render/IRender";
import { IRenderMapper } from "../../../entities/Render/IRenderMapper";
import { IRenderRepo } from "../../../entities/Render/IRenderRepo";

export class GetRendersUseCase implements IUseCase<void, IRenderDto[]> {
    private readonly repo: IRenderRepo;
    private readonly mapper: IRenderMapper;

    constructor({ renderRepository, renderMapper }: IServiceCradle) {
        this.repo = renderRepository;
        this.mapper = renderMapper;
    }

    public execute = async (): Promise<IRenderDto[]> => {
        return (await Promise.resolve(await this.repo.find())).map(this.mapper.toDTO)
    }
}