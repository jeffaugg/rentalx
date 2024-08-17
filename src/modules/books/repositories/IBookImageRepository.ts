import { BookImage } from "../infra/typeorm/entity/BookImage";

interface IBookImageRepository {
    create(book_id: string, image_name: string): Promise<BookImage>;
}

export { IBookImageRepository };
