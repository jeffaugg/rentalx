import { Category } from "../model/Categoty";
import { ICategoriesRepository, IcreateCategoryDTO } from "./ICategoriesRepository";



// PostgresCategoriesRepository é um subtipo de ICategoriesRepository
class PostgresCategoriesRepository implements ICategoriesRepository{
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({name, description}:IcreateCategoryDTO): void {
        console.log(name, description);
    }
}



export { PostgresCategoriesRepository};