import { Category } from "../../model/Categoty";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";




class ListCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;
    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}


export { ListCategoryUseCase };