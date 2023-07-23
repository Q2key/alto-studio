
import { IProject } from "../../domain/entities/Project/IProject";
import { IProjectDto } from "../dto/IProjectDto";
import { IProjectMapper } from "./IProjectMapper";

export class ProjectMapper implements IProjectMapper {
    toDTO(entity: IProject): IProjectDto {
        return entity as IProjectDto;
    }
}