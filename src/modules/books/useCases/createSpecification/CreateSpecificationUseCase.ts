import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { AppError } from "../../../../shared/erros/AppError";

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
            throw new AppError("A especificação já existe");
        }

        await this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
