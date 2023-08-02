import { IProjectDto } from "./IProjectDto.1";

export interface ICreateProjectDto extends Partial<IProjectDto> {
    id?: string;
    name: string;
    userId: string;
}