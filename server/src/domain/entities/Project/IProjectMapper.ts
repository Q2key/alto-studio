import { IMapper } from "../../../infrastructure/mapper/IMapper";
import { IProject, IProjectDto } from "./IProject";

export interface IProjectMapper extends IMapper<IProject, IProjectDto > {
    toDTO(entity: IProject): IProject
}