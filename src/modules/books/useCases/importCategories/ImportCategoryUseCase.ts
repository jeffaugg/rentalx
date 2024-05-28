import csv from "csv-parse";
import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

interface IImporteCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository,
    ) {}

    loadCategory(file: Express.Multer.File): Promise<IImporteCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path); //criando uma stream de leitura

            const categories: IImporteCategory[] = [];
            const parseFile = csv.parse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategory(file);

        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory =
                await this.categoriesRepository.findByName(name);

            if (!existCategory) {
                await this.categoriesRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export { ImportCategoryUseCase };
