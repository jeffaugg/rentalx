import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";




class ListCategoriesController {
    private listCategoriesUseCase : ListCategoryUseCase

    constructor(listCategoriesUseCase : ListCategoryUseCase ){
        this.listCategoriesUseCase = listCategoriesUseCase;
    }

    handle(req: Request, res: Response): Response {
        const all = this.listCategoriesUseCase.execute();

        return res.json(all);

    }


}





export { ListCategoriesController };