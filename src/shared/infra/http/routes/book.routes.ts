import { Router } from "express";

import { CreateBookController } from "../../../../modules/books/useCases/createBook/CreateBookController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListAvailableBooksController } from "../../../../modules/books/useCases/listAvailableBooks/ListAvailableBookController";
import { CreateBookSpecificationController } from "../../../../modules/books/useCases/createBookSpecification/CreateBookSpecificationController";

const bookRoutes = Router();

const createBookController = new CreateBookController();
const listAvailableBooksController = new ListAvailableBooksController();
const createBookSpecificationController =
    new CreateBookSpecificationController();
bookRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createBookController.handle,
);

bookRoutes.get("/available", listAvailableBooksController.handle);

bookRoutes.post(
    "/specifications/:id",
    // ensureAuthenticated,
    // ensureAdmin,
    createBookSpecificationController.handle,
);
export { bookRoutes };
