import { Category } from "../model/Categoty";

//DTO => Data transfer object

interface IcreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: IcreateCategoryDTO): void;

}


export { ICategoriesRepository, IcreateCategoryDTO };