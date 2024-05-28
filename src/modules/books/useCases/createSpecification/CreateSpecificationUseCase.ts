import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    specificationRepository: ISpecificationsRepository;

    constructor(
        @inject("SpecificationsRepository")
        specificationRepository: ISpecificationsRepository,
    ) {
        this.specificationRepository = specificationRepository;
    }

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("A especificação já existe");
        }

        await this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
