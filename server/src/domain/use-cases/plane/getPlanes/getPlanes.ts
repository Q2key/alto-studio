import { IUseCase } from "../../../../interface";

export class getPlanesUseCase implements IUseCase<{}, {}> {
    execute: (payload: {}) => Promise<{}>;
}