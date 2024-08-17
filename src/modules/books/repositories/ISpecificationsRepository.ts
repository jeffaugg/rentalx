import { Specification } from "../infra/typeorm/entity/Specification";

interface IcreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findByName(name: string): Promise<Specification>;
    list(): Promise<Specification[]>;
    create({
        name,
        description,
    }: IcreateSpecificationDTO): Promise<Specification>;
    findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationsRepository, IcreateSpecificationDTO };
