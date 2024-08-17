import { Repository, getRepository } from "typeorm";
import { Specification } from "../entity/Specification";
import {
    ISpecificationsRepository,
    IcreateSpecificationDTO,
} from "../../../repositories/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: IcreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            name,
            description,
        });
        await this.repository.save(specification);
        return specification;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({
            name,
        });
        return specification;
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const specifications = await this.repository.findByIds(ids);
        return specifications;
    }
}

export { SpecificationsRepository };
