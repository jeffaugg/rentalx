import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBookSpecificationUseCase } from "./CreateBookSpecificationUseCase";

class CreateBookSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { specification_id } = request.body;
        const createBookSpecificationUseCase = container.resolve(
            CreateBookSpecificationUseCase,
        );
        const books = await createBookSpecificationUseCase.execute({
            book_id: id,
            specification_id,
        });

        return response.json(books);
    }
}

export { CreateBookSpecificationController };
