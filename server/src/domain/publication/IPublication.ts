import { IResource } from "../resource/IResource";

export enum PublicationIconKind {
    NA,
    News,
    Sale,
}

export type Link = {
    url: string;
    text: string;
}

export interface PublicationContent {
    header: string;
    subheader: string;
    body: string;
    icon: PublicationIconKind;
    poster?: IResource;
    links?: Link[];
}

export interface IPublication {
    id: string | undefined;
    content: PublicationContent;
}