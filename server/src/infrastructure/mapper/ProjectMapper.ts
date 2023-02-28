import { IProject, IProjectDto } from "../../domain/entities/Project/IProject";
import { IProjectMapper } from "../../domain/entities/Project/IProjectMapper";

export class ProjectMapper implements IProjectMapper {
    toDTO(entity: IProject): IProjectDto {
        return entity as IProjectDto;
    }
}