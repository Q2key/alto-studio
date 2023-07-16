import {NextFunction} from "express";
import {IRenderDto} from "../../domain/entities/Render/IRender";
import {IUploadRenderInput} from "../../domain/use-cases/render/uploadRender/uploadRenderInput";
import {IServiceCradle} from "../../interface";
import {BaseController, TRequestBody, TResponse} from "./BaseController";

export class RenderController extends BaseController {
    public readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        super();
        this.service = service;
    }

    public FindAll = async (req: TRequestBody<{}>, res: TResponse<{
        renders: IRenderDto[]
    }>, next: NextFunction): Promise<TResponse<{ renders: IRenderDto[] }>> => {
        return this.wrap(async () => {
            const renders = await this.service.getRendersUseCase.execute()
            return res.json({renders})
        }, next);
    }


    public Upload = async (req: TRequestBody<IUploadRenderInput>, res: TResponse<{
        render: IRenderDto
    }>, next: NextFunction): Promise<TResponse<{ render: IRenderDto }>> => {
        return this.wrap(async () => {
            const render = await this.service.uploadRenderUseCase.execute(req.body)
            return res.json({render})
        }, next);
    }
}