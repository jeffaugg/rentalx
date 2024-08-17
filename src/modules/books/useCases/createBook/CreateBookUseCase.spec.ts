import { BookRepositoryInMemory } from "../../repositories/in-memory/BooksRepositoryInMemory";
import { CreateBookUseCase } from "./CreateBookUseCase";

let createBookUseCase: CreateBookUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory;
describe("Create Book", () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory();
        createBookUseCase = new CreateBookUseCase(bookRepositoryInMemory);
    });

    it("should be able to create a new book", async () => {
        const book = await createBookUseCase.execute({
            name: "livroTeste",
            category_id: "category",
            daily_rate: 100,
            description: "descriptionTest",
            fine_amount: 60,
        });

        expect(book).toHaveProperty("id");
    });

    it("should be able to create a book with availabe true by default", async () => {
        const book = await createBookUseCase.execute({
            name: "livroTeste",
            category_id: "category",
            daily_rate: 100,
            description: "descriptionTest",
            fine_amount: 60,
        });

        expect(book.available).toBe(true);
    });
});
