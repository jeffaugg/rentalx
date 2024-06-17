import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/books/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/books/infra/typeorm/repositories/CategoriesRepository";

import { ISpecificationsRepository } from "../../modules/books/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/books/infra/typeorm/repositories/SpecificationsRepository";

import { IUserRepostory } from "../../modules/accounts/repositories/IUserRepository";
import { UserRepository } from "../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { IBooksRepository } from "../../modules/books/repositories/IBooksRepository";
import { BookRepository } from "../../modules/books/infra/typeorm/repositories/BookRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", //name
    CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository,
);

container.registerSingleton<IUserRepostory>("UserRepository", UserRepository);

container.registerSingleton<IBooksRepository>("BookRepository", BookRepository);
