import { Repository, getRepository } from "typeorm";
import { ICreateBookDTO } from "../../../dtos/ICreateBook";
import { IBooksRepository } from "../../../repositories/IBooksRepository";
import { Book } from "../entity/Book";

class BookRepository implements IBooksRepository {
    private repository: Repository<Book>;

    constructor() {
        this.repository = getRepository(Book);
    }

    async create({
        category_id,
        daily_rate,
        description,
        fine_amount,
        name,
    }: ICreateBookDTO): Promise<Book> {
        const book = this.repository.create({
            category_id,
            daily_rate,
            description,
            fine_amount,
            name,
        });

        await this.repository.save(book);
        return book;
    }
}

export { BookRepository };
