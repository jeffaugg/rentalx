import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBookImagens1719285244575 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "book_image",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    {
                        name: "book_id",
                        type: "uuid",
                    },
                    {
                        name: "imagem_name",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],

                foreignKeys: [
                    {
                        name: "FKBookImage",
                        referencedTableName: "book",
                        referencedColumnNames: ["id"],
                        columnNames: ["book_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("book_image");
    }
}
