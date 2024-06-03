import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/books/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/books/repositories/implementations/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/books/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/books/repositories/implementations/SpecificationsRepository";
import { IUserRepostory } from "../../modules/accounts/repositories/IUserRepository";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", //name
    CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository,
);

container.registerSingleton<IUserRepostory>("UserRepository", UserRepository);
