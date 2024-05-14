import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, IcreateSpecificationDTO } from "../ISpecificationsRepository";



class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    private static INSTANCE : SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }


    public static getInstance() : SpecificationsRepository{

        if(!this.INSTANCE){
            this.INSTANCE = new SpecificationsRepository();
        }

        return this.INSTANCE;
    }


    create({ name, description }: IcreateSpecificationDTO): void {
        const specification = new Specification(); // id tá sendo passado no construtor

        Object.assign(specification, {
            name,
            description,
        })

        this.specifications.push(specification);

    }


    findByName(name: string): Specification {
        const specification = this.specifications.find((specification) => specification.name === name);
        return specification;

    }


    list(): Specification[] {
        return this.specifications;
    }


}


export { SpecificationsRepository };