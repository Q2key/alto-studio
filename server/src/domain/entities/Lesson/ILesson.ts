import { IResource } from "../Resource/IResource";


export interface ILessonSection {
    name?: string;
    description?: string;
}

export interface IVideoLessonSection extends ILessonSection {
    posterResource: IResource,
    videoResource: IResource,
}

export interface ILessonContent {
    structureType: LessonStructureType;
    sections: ILessonSection[];
}

export interface ILessonStructure {
    name: string;
    description: string;
    content: ILessonContent;
}

export enum LessonStructureType {
    Colibri,
    Eagle,
}

export interface ILesson {
    id?: string;
    name: string;
    description: string;
    structureType: LessonStructureType,
    structure: ILessonStructure,
}