import { Repository, getRepository } from "typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUserRepostory } from "../../../repositories/IUserRepository";
import { User } from "../entity/User";

class UserRepository implements IUserRepostory {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async create({
        name,
        email,
        password,
        avatar,
        id,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
            avatar,
            id,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UserRepository };
