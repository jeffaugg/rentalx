import { Specification } from "../../infra/typeorm/entity/Specification";
import {
    ISpecificationsRepository,
    IcreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationRepositoryInMemory implements ISpecificationsRepository {
    specifications: Specification[] = [];

    async findByName(name: string): Promise<Specification> {
        return this.specifications.find(
            (specification) => specification.name === name,
        );
    }
    list(): Promise<Specification[]> {
        throw new Error("Method not implemented.");
    }
    async create({
        name,
        description,
    }: IcreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
        });
        this.specifications.push(specification);
        return specification;
    }
    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specifications.filter((specification) =>
            ids.includes(specification.id),
        );

        return allSpecifications;
    }
}

export { SpecificationRepositoryInMemory };
