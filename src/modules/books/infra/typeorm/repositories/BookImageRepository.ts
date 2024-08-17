import { Repository, getRepository } from "typeorm";
import { IBookImageRepository } from "../../../repositories/IBookImageRepository";
import { BookImage } from "../entity/BookImage";

class BookImageRepository implements IBookImageRepository {
    private repository: Repository<BookImage>;

    constructor() {
        this.repository = getRepository(BookImage);
    }
    async create(book_id: string, image_name: string): Promise<BookImage> {
        const bookImage = this.repository.create({
            book_id,
            image_name,
        });

        await this.repository.save(bookImage);

        return bookImage;
    }
}

export { BookImageRepository };
