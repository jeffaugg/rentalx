import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";
import { AppError } from "../erros/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token Ausente", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "6c42b2e01bafd16f1ac50e358a679f6d",
        ) as IPayload;

        const userRepository = new UserRepository();
        const user = userRepository.findById(user_id);

        if (!user) {
            throw new AppError("Usuário não existe", 401);
        }

        next();
    } catch {
        throw new AppError("Token inválido", 401);
    }
}
