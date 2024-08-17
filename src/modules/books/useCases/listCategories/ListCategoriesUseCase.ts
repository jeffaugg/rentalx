import { inject, injectable } from "tsyringe";
import { Category } from "../../infra/typeorm/entity/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
@injectable()
class ListCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;
    constructor(
        @inject("CategoriesRepository")
        categoriesRepository: ICategoriesRepository,
    ) {
        this.categoriesRepository = categoriesRepository;
    }

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoryUseCase };
