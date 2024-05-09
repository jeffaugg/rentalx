import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoruService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoruService(categoriesRepository);

    createCategoryService.execute({name, description})

    return res.status(201).send();

});

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();

    return res.json(all);
})





export { categoriesRoutes };