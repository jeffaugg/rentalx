import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, daily_rate, fine_amount, category_id } =
            request.body;

        const createBookUseCase = container.resolve(CreateBookUseCase);

        const book = await createBookUseCase.execute({
            name,
            description,
            daily_rate,
            fine_amount,
            category_id,
        });

        return response.status(201).json(book);
    }
}

export { CreateBookController };
