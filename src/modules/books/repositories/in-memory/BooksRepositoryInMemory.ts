import { ICreateBookDTO } from "../../dtos/ICreateBook";
import { Book } from "../../infra/typeorm/entity/Book";
import { IBooksRepository } from "../IBooksRepository";

class BookRepositoryInMemory implements IBooksRepository {
    book: Book[] = [];
    async create({
        category_id,
        daily_rate,
        description,
        fine_amount,
        name,
    }: ICreateBookDTO): Promise<Book> {
        const book = new Book();

        Object.assign(book, {
            category_id,
            daily_rate,
            description,
            fine_amount,
            name,
        });

        return book;
    }
}

export { BookRepositoryInMemory };
