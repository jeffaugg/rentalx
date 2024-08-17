import { AppError } from "../../../../shared/erros/AppError";
import { BookRepositoryInMemory } from "../../repositories/in-memory/BooksRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "../../repositories/in-memory/SpecificationsRepositoryInMemory";

import { CreateBookSpecificationUseCase } from "./CreateBookSpecificationUseCase";

let createBookSpecificationUseCase: CreateBookSpecificationUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory;
describe("Create Book Specification", () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory();
        specificationsRepositoryInMemory =
            new SpecificationRepositoryInMemory();
        createBookSpecificationUseCase = new CreateBookSpecificationUseCase(
            bookRepositoryInMemory,
            specificationsRepositoryInMemory,
        );
    });

    it("should not be able to add a new Specification to a now-existent book", async () => {
        expect(async () => {
            const book_id = "123";
            const specification_id = ["321"];
            await createBookSpecificationUseCase.execute({
                book_id,
                specification_id,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able to add a new Specification to the book", async () => {
        const book = await bookRepositoryInMemory.create({
            name: "livroTeste",
            category_id: "category",
            daily_rate: 100,
            description: "descriptionTest",
            fine_amount: 60,
        });

        const specification = await specificationsRepositoryInMemory.create({
            description: "test",
            name: "test",
        });

        const specification_id = [specification.id];
        const specificationsBooks =
            await createBookSpecificationUseCase.execute({
                book_id: book.id,
                specification_id,
            });

        expect(specificationsBooks).toHaveProperty("specifications");
        expect(specificationsBooks.specifications.length).toBe(1);
    });
});
