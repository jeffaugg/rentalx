import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/erros/AppError";
import { Book } from "../../infra/typeorm/entity/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    book_id: string;
    specification_id: string[];
}
@injectable()
class CreateBookSpecificationUseCase {
    constructor(
        @inject("BookRepository")
        private bookRepository: IBooksRepository,
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository,
    ) {}

    async execute({ book_id, specification_id }: IRequest): Promise<Book> {
        const bookExist = await this.bookRepository.findById(book_id);

        if (!bookExist) {
            throw new AppError("Livro não existe!");
        }
        const specification =
            await this.specificationsRepository.findByIds(specification_id);

        bookExist.specifications = specification;
        await this.bookRepository.create(bookExist);

        return bookExist;
    }
}

export { CreateBookSpecificationUseCase };
