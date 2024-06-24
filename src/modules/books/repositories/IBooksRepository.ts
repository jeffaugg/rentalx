import { ICreateBookDTO } from "../dtos/ICreateBook";
import { Book } from "../infra/typeorm/entity/Book";

interface IBooksRepository {
    create(data: ICreateBookDTO): Promise<Book>;
    findAvailable(name?: string, category_id?: string): Promise<Book[]>;
    findById(id: string): Promise<Book>;
}

export { IBooksRepository };
