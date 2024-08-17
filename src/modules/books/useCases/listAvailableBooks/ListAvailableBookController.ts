import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAvailableBooksUseCase } from "./ListAvailableBookUseCase";

class ListAvailableBooksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, category_id } = request.query;
        const listAvailableBooksUseCase = container.resolve(
            ListAvailableBooksUseCase,
        );

        const books = await listAvailableBooksUseCase.execute({
            name: name as string,
            category_id: category_id as string,
        });

        return response.json(books);
    }
}

export { ListAvailableBooksController };
