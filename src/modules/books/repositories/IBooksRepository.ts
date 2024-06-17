import { ICreateBookDTO } from "../dtos/ICreateBook";
import { Book } from "../infra/typeorm/entity/Book";

interface IBooksRepository {
    create(data: ICreateBookDTO): Promise<Book>;
}

export { IBooksRepository };
