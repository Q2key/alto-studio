import { IUseCase } from "../../../../interface";
import { IProjectDto } from "../../../entities/Project/IProject";
import { IProjectInput } from "./addProjectInput";

export class AddProjectsUseCase implements IUseCase<IProjectInput, IProjectDto> {
    execute: (payload: IProjectInput) => Promise<IProjectDto>;
}