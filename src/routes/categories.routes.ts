import { Router } from 'express';
import { createCategoryController } from '../modules/books/useCases/createCategory';
import { listCategoriesController } from '../modules/books/useCases/listCategories';
import { importCategoryController } from '../modules/books/useCases/importCategories';
import multer from 'multer';

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp", // cria um arquivo na raiz do projeto rentalx
});


categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res); 
});

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res); 
})

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
   return importCategoryController.handle(req, res);
})





export { categoriesRoutes };