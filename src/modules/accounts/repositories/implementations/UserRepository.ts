import { Repository, getRepository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepostory } from "../IUserRepository";
import { User } from "../../entity/User";

class UserRepository implements IUserRepostory {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }
}

export { UserRepository };
