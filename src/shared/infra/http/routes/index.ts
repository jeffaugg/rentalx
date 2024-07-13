import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { bookRoutes } from "./book.routes";
import { rentalRouter } from "./rental.routes";
const routes = Router();
routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationRoutes);
routes.use("/users", usersRoutes);
routes.use("/books", bookRoutes);
routes.use(authenticateRoutes);
routes.use("/rentals", rentalRouter);
export { routes };
