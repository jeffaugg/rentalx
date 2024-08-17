import { ICreateRentalDTO } from "../../dto/ICreateRentalDTO";
import { Rental } from "../../infra/typeorm/entity/Rental";
import { IRentalRepository } from "../IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalRepository {
    async create({
        book_id,
        expected_return_date,
        user_id,
    }: ICreateRentalDTO): Promise<Rental> {
        const rental = new Rental();

        Object.assign(rental, {
            book_id,
            expected_return_date,
            user_id,
            start_date: new Date(),
        });

        this.rentals.push(rental);

        return rental;
    }
    rentals: Rental[] = [];

    async findOpenRentalByBook(book_id: string): Promise<Rental> {
        return this.rentals.find(
            (rental) => rental.book_id === book_id && !rental.end_date,
        );
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        return this.rentals.find(
            (rental) => rental.user_id === user_id && !rental.end_date,
        );
    }
}

export { RentalsRepositoryInMemory };
