import { inject, injectable } from "tsyringe";
import { Book } from "../../infra/typeorm/entity/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    fine_amount: number;
    category_id: string;
}

@injectable()
class CreateBookUseCase {
    constructor(
        @inject("BookRepository")
        private bookRepository: IBooksRepository,
    ) {}

    async execute({
        name,
        category_id,
        daily_rate,
        description,
        fine_amount,
    }: IRequest): Promise<Book> {
        const book = await this.bookRepository.create({
            name,
            category_id,
            daily_rate,
            description,
            fine_amount,
        });

        return book;
    }
}

export { CreateBookUseCase };
