import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBooks1718134383442 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "book",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "daily_rate",
                        type: "numeric",
                    },
                    {
                        name: "available",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "fine_amount",
                        type: "numeric",
                    },
                    {
                        name: "category_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKCategoryBook",
                        referencedTableName: "category",
                        referencedColumnNames: ["id"],
                        columnNames: ["category_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("book");
    }
}
