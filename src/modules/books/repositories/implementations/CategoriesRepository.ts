import { Category } from "../../model/Categoty";
import { ICategoriesRepository, IcreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository

    private constructor() {
        this.categories = [];
    }


    public static getInstance(): CategoriesRepository {
        if (!this.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return this.INSTANCE
    }



    create({ description, name }: IcreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        })
        //object assign adiciona tudo dentro do objeto passado

        this.categories.push(category);
    }



    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find((category) => category.name === name);
        return category;
    }
}




export {
    CategoriesRepository
};  