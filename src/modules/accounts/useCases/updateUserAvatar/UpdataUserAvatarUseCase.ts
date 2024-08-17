import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { IUserRepostory } from "../../repositories/IUserRepository";

interface IRequest {
    user_id: string;
    avatar_File: string;
}

@injectable()
class UpdataUserAvatarUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepostory,
    ) {}

    async execute({ user_id, avatar_File }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }
        user.avatar = avatar_File;

        await this.userRepository.create(user);
    }
}

export { UpdataUserAvatarUseCase };
