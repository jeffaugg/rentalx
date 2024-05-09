import { ICategoriesRepository } from "../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string
}


class CreateCategoruService {
    private categoriesRepository: ICategoriesRepository;    
    constructor(categoriesRepository: ICategoriesRepository){
        this.categoriesRepository = categoriesRepository;
    }

    execute({name, description} : IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        
        if (categoryAlreadyExists) {
            throw new Error("A categoria já existe");
        }

        this.categoriesRepository.create({ name, description })
    }
}




export { CreateCategoruService };