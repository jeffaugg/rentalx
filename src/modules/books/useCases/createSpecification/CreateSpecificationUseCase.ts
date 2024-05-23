import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    specificationRepository: ISpecificationsRepository;

    constructor(specificationRepository: ISpecificationsRepository) {
        this.specificationRepository = specificationRepository;
    }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("A especificação já existe");
        }

        this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
