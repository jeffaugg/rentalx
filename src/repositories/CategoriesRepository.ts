import { Category } from "../model/Categoty";
import { ICategoriesRepository, IcreateCategoryDTO } from "./ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository{
    private categories: Category[];



    constructor(){
        this.categories = [];
    }



    create({description, name} : IcreateCategoryDTO) : void{
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(), 
        })
        //object assign adiciona tudo dentro do objeto passado

        this.categories.push(category);
    }



    list(): Category[] {
        return this.categories;
    }

    findByName(name: string) : Category{
        const category = this.categories.find((category) => category.name === name);
        return category;
    }
}




export {
    CategoriesRepository
};  