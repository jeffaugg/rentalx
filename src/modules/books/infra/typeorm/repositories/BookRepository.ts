import { Repository, getRepository } from "typeorm";
import { ICreateBookDTO } from "../../../dtos/ICreateBook";
import { IBooksRepository } from "../../../repositories/IBooksRepository";
import { Book } from "../entity/Book";

class BookRepository implements IBooksRepository {
    private repository: Repository<Book>;

    constructor() {
        this.repository = getRepository(Book);
    }
    async findById(id: string): Promise<Book> {
        const book = await this.repository.findOne(id);
        return book;
    }

    async create({
        category_id,
        daily_rate,
        description,
        fine_amount,
        name,
        specifications,
        id,
    }: ICreateBookDTO): Promise<Book> {
        const book = this.repository.create({
            category_id,
            daily_rate,
            description,
            fine_amount,
            name,
            specifications,
            id,
        });

        await this.repository.save(book);
        return book;
    }

    async findAvailable(name?: string, category_id?: string): Promise<Book[]> {
        const booksQuery = await this.repository
            .createQueryBuilder("b")
            .where("b.available = :available", { available: true });

        if (name) {
            booksQuery.andWhere("b.name = :name", { name });
        }

        if (category_id) {
            booksQuery.andWhere("b.category_id = :category_id", {
                category_id,
            });
        }

        const books = await booksQuery.getMany();

        return books;
    }
}

export { BookRepository };
