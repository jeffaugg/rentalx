import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";
import { container } from "tsyringe";

class ListCategoriesController {
    private listCategoriesUseCase: ListCategoryUseCase;

    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoryUseCase);
        const all = await listCategoriesUseCase.execute();

        return res.json(all);
    }
}

export { ListCategoriesController };
