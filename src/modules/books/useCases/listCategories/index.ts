import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

const listCategoriesUseCase = new ListCategoryUseCase(
    CategoriesRepository.getInstance(),
);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase,
);

export { listCategoriesController };
