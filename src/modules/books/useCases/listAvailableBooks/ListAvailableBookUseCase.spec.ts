import { BookRepositoryInMemory } from "../../repositories/in-memory/BooksRepositoryInMemory";
import { ListAvailableBooksUseCase } from "./ListAvailableBookUseCase";

let listAvailableBooksUseCase: ListAvailableBooksUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory;
describe("List Book", () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory();
        listAvailableBooksUseCase = new ListAvailableBooksUseCase(
            bookRepositoryInMemory,
        );
    });
    it("should be able to list all available books", async () => {
        const book = await bookRepositoryInMemory.create({
            name: "livro1",
            description: "livro1",
            category_id: "c3698f84-be03-43cf-9d0b-01af42f02e36",
            daily_rate: 100,
            fine_amount: 40,
        });
        const books = await listAvailableBooksUseCase.execute({});
        expect(books).toEqual([book]);
    });

    it("should be able to list all available books by name", async () => {
        const book = await bookRepositoryInMemory.create({
            name: "livro2",
            description: "livro1",
            category_id: "c3698f84-be03-43cf-9d0b-01af42f02e36",
            daily_rate: 100,
            fine_amount: 40,
        });
        const books = await listAvailableBooksUseCase.execute({
            name: "livro1",
        });
        expect(books).toEqual([book]);
    });

    it("should be able to list all available books by category_id", async () => {
        const book = await bookRepositoryInMemory.create({
            name: "livro2",
            description: "livro1",
            category_id: "c3698f84-be03-43cf-9d0b-01af42f02e36",
            daily_rate: 100,
            fine_amount: 40,
        });
        const books = await listAvailableBooksUseCase.execute({
            name: "c3698f84-be03-43cf-9d0b-01af42f02e36",
        });
        expect(books).toEqual([book]);
    });
});
