import { LessonResources } from "../LessonResources/LessonResources";
import { ILesson, ILessonStructure, LessonStructureType } from "./ILesson";


export class Lesson implements ILesson {
    id?: string;
    name: string;
    description: string;
    structure: ILessonStructure;
    structureType: LessonStructureType;
}