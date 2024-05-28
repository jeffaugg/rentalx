import { Repository, getRepository } from "typeorm";
import { Category } from "../../entity/Category";
import {
    ICategoriesRepository,
    IcreateCategoryDTO,
} from "../ICategoriesRepository";
class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;
    private static INSTANCE: CategoriesRepository;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ description, name }: IcreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        });
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        //Selec * from categories where name = "name" limit 1
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository };
