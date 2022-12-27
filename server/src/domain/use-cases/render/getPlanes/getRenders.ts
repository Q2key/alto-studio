import { IUseCase } from "../../../../interface";

export class getRendersUseCase implements IUseCase<{}, {}> {
    execute: (payload: {}) => Promise<{}>;
}