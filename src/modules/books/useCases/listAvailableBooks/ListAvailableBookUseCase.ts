import { inject, injectable } from "tsyringe";
import { Book } from "../../infra/typeorm/entity/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
    name?: string;
    category_id?: string;
}
@injectable()
class ListAvailableBooksUseCase {
    constructor(
        @inject("BookRepository")
        private bookrepository: IBooksRepository,
    ) {}
    async execute({ category_id, name }: IRequest): Promise<Book[]> {
        const books = await this.bookrepository.findAvailable(
            category_id,
            name,
        );
        return books;
    }
}

export { ListAvailableBooksUseCase };
