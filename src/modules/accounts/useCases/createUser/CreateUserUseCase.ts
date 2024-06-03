import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUserRepostory } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepostory,
    ) {}
    async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("Usuário já cadastrado ");
        }
        const passwordHash = await hash(password, 8);
        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
