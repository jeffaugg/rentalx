import { Specification } from "../model/Specification";

interface IcreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findByName(name: string): Specification;
    list(): Specification[];
    create({ name, description }: IcreateSpecificationDTO): void;
}

export { ISpecificationsRepository, IcreateSpecificationDTO };
