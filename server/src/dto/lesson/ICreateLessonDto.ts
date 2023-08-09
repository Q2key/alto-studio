export interface ICreateLessonDto {
    name:        string;
    description: string;
    structure:   Structure;
}

export interface Structure {
    units: Unit[];
}

export interface Unit {
    name:           string;
    description:    string;
    videoResources: VideoResource[];
    attachments:    string[];
    links:          Link[];
}

export interface Link {
    text: string;
    url:  string;
}

export interface VideoResource {
    posterResourceId: string;
    videoResourceId:  string;
}
