import { getRepository, Repository } from "typeorm";
import { ICreateRentalDTO } from "../../../dto/ICreateRentalDTO";
import { IRentalRepository } from "../../../repositories/IRentalsRepository";
import { Rental } from "../entity/Rental";

class RentalsRepository implements IRentalRepository {
    private repository: Repository<Rental>;

    constructor() {
        this.repository = getRepository(Rental);
    }
    async findOpenRentalByBook(book_id: string): Promise<Rental> {
        const openByBook = await this.repository.findOne({ book_id });
        return openByBook;
    }

    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const openByUser = await this.repository.findOne({ user_id });
        return openByUser;
    }

    async create({
        book_id,
        expected_return_date,
        user_id,
    }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({
            book_id,
            expected_return_date,
            user_id,
        });
        await this.repository.save(rental);
        return rental;
    }
}

export { RentalsRepository };
