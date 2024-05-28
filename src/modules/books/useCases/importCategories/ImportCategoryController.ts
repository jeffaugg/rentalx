import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

import { Request, Response } from "express";

import { container } from "tsyringe";
class ImportCategoryController {
    private importCategoryUseCase: ImportCategoryUseCase;

    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
        await importCategoryUseCase.execute(file);

        return res.send();
    }
}

export { ImportCategoryController };
