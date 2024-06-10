import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUserRepostory } from "../../repositories/IUserRepository";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../shared/erros/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private repository: IUserRepostory,
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.repository.findByEmail(email);

        if (!user) {
            throw new AppError("Email ou senha incorreta");
        }

        const passawordMatch = await compare(password, user.password);

        if (!passawordMatch) {
            throw new AppError("Email ou senha incorreta");
        }

        const token = sign({}, "6c42b2e01bafd16f1ac50e358a679f6d", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
