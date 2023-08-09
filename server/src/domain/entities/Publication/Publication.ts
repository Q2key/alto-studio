import { IPublication, PublicationContent } from "./IPublication";

export class Publication implements IPublication {
    id: string | undefined;
    content: PublicationContent;
}