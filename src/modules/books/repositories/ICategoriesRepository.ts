import { Category } from "../entity/Category";

//DTO => Data transfer object
interface IcreateCategoryDTO {
    name: string;
    description: string;
}
interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: IcreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, IcreateCategoryDTO };
