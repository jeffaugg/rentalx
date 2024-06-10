import multer from "multer";
import { CreateCategoryController } from "../../../../modules/books/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../../modules/books/useCases/importCategories/ImportCategoryController";
import { ListCategoriesController } from "../../../../modules/books/useCases/listCategories/ListCategoriesController";
import { Router } from "express";

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp", // cria um arquivo na raiz do projeto rentalx
});

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle,
);

export { categoriesRoutes };
