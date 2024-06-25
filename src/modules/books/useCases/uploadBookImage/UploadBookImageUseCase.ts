import { inject, injectable } from "tsyringe";
import { IBookImageRepository } from "../../repositories/IBookImageRepository";

interface IRequest {
    book_id: string;
    images_name: string[];
}

@injectable()
class UploadBookImageUseCase {
    constructor(
        @inject("BooksImagesRepository")
        private booksImagesRepository: IBookImageRepository,
    ) {}

    async execute({ book_id, images_name }: IRequest): Promise<void> {
        images_name.map(async (image) => {
            await this.booksImagesRepository.create(book_id, image);
        });
    }
}

export { UploadBookImageUseCase };
