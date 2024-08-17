import { ICreateBookDTO } from "../../dtos/ICreateBook";
import { Book } from "../../infra/typeorm/entity/Book";
import { IBooksRepository } from "../IBooksRepository";

class BookRepositoryInMemory implements IBooksRepository {
    books: Book[] = [];
    async create({
        category_id,
        daily_rate,
        description,
        fine_amount,
        name,
        id,
    }: ICreateBookDTO): Promise<Book> {
        const book = new Book();

        Object.assign(book, {
            category_id,
            daily_rate,
            description,
            fine_amount,
            name,
            id,
        });

        this.books.push(book);

        return book;
    }

    async findAvailable(name?: string, category_id?: string): Promise<Book[]> {
        const books = this.books.filter((book) => {
            if (
                (category_id &&
                    book.category_id === category_id &&
                    book.available === true) ||
                // eslint-disable-next-line prettier/prettier
                (name &&
                    book.name == name && book.available === true) ||
                book.available === true
            ) {
                return book;
            }

            return null;
        });

        return books;
    }

    async findById(id: string): Promise<Book> {
        const book = this.books.find((book) => book.id === id);
        return book;
    }
}

export { BookRepositoryInMemory };
