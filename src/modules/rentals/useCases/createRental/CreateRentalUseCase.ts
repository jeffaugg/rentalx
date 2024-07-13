import { inject, injectable } from "tsyringe";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/erros/AppError";
import { Rental } from "../../infra/typeorm/entity/Rental";
import { IRentalRepository } from "../../repositories/IRentalsRepository";

interface IRequest {
    user_id: string;
    book_id: string;
    expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
    ) {}

    async execute({
        book_id,
        expected_return_date,
        user_id,
    }: IRequest): Promise<Rental> {
        const minimumHour = 24;
        const bookUnAvailable =
            await this.rentalsRepository.findOpenRentalByBook(book_id);

        if (bookUnAvailable) {
            throw new AppError("O livro está indisponível");
        }

        const rentalOpenToUser =
            await this.rentalsRepository.findOpenRentalByUser(user_id);

        if (rentalOpenToUser) {
            throw new AppError("Usuário já possui um aluguel em aberto");
        }

        const compare = this.dateProvider.compareInHours(
            this.dateProvider.dateNow(),
            expected_return_date,
        );

        if (compare < minimumHour) {
            throw new AppError("Data de retorno inválido");
        }

        const rental = await this.rentalsRepository.create({
            user_id,
            book_id,
            expected_return_date,
        });

        return rental;
    }
}

export { CreateRentalUseCase };
