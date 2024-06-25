import { container } from "tsyringe";
import { UploadBookImageUseCase } from "./UploadBookImageUseCase";
import { Request, Response } from "express";

interface IFiles {
    filename: string;
}

class UploadBookImageController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const images = request.files as IFiles[];
        const uploadBookImageUseCase = container.resolve(
            UploadBookImageUseCase,
        );

        const images_name = images.map((file) => file.filename);
        await uploadBookImageUseCase.execute({
            book_id: id,
            images_name,
        });

        return response.status(201).send();
    }
}

export { UploadBookImageController };
