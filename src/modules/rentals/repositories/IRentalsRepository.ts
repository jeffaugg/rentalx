import { ICreateRentalDTO } from "../dto/ICreateRentalDTO";
import { Rental } from "../infra/typeorm/entity/Rental";

interface IRentalRepository {
    create({
        book_id,
        expected_return_date,
        user_id,
    }: ICreateRentalDTO): Promise<Rental>;
    findOpenRentalByBook(book_id: string): Promise<Rental>;
    findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalRepository };
