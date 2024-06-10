import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entity/User";
import { IUserRepostory } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepostory {
    users: User[] = [];
    async create({ email, name, password }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            email,
            name,
            password,
        });

        this.users.push(user);
    }
    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }
    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }
}

export { UserRepositoryInMemory };
