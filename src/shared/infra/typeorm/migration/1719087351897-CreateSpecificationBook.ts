import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateSpecificationBook1719087351897
    // eslint-disable-next-line prettier/prettier
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: " ",
                columns: [
                    {
                        name: "book_id",
                        type: "uuid",
                    },
                    {
                        name: "specification_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
        );
        await queryRunner.createForeignKey(
            "specification_books",
            new TableForeignKey({
                name: "FKSpecificationBook",
                referencedTableName: "specifications",
                referencedColumnNames: ["id"],
                columnNames: ["specification_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }),
        );

        await queryRunner.createForeignKey(
            "specification_books",
            new TableForeignKey({
                name: "FKBookSpecification",
                referencedTableName: "book",
                referencedColumnNames: ["id"],
                columnNames: ["book_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "specification_books",
            "FKSpecificationBook",
        );
        await queryRunner.dropForeignKey(
            "specification_books",
            "FKBookSpecification",
        );

        queryRunner.dropTable("specification_books");
    }
}
