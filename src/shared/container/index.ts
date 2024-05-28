import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/books/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/books/repositories/implementations/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/books/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/books/repositories/implementations/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", //name
    CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", //name
    SpecificationsRepository,
);
