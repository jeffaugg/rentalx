import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdataUserAvatarUseCase } from "./UpdataUserAvatarUseCase";

class UpdateUserAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const avatar_File = request.file.filename;
        const updataUserAvatarUseCase = container.resolve(
            UpdataUserAvatarUseCase,
        );

        await updataUserAvatarUseCase.execute({ user_id: id, avatar_File });

        return response.status(200).send();
    }
}

export { UpdateUserAvatarController };
