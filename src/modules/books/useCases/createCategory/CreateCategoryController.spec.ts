import request from "supertest";
import { app } from "../../../../shared/infra/http/app";
import createConnection from "../../../../shared/infra/typeorm/index";
import { Connection } from "typeorm";
import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";
let connection: Connection;
describe("Create Category Controller", () => {
    beforeAll(async () => {
        try {
            connection = await createConnection();
            await connection.runMigrations();
        } catch (error) {
            console.error(
                "Falha ao estabelecer conexão com o banco de dados:",
                error,
            );
        }
        const id = uuidV4();
        const password = await hash("admin", 8);
        await connection.query(
            `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at )
            values('${id}', 'admin', 'admin@admin.com.br', '${password}', true, 'now()')
            `,
        );
    });

    afterAll(async () => {
        if (connection) {
            await connection.dropDatabase();
            await connection.close();
        }
    });

    it("should be able to create a new category", async () => {
        const responseToken = await request(app).post("/sessions").send({
            email: "admin@admin.com.br",
            password: "admin",
        });

        const { token } = responseToken.body;
        const response = await request(app)
            .post("/categories")
            .send({
                name: "Category Supertest",
                description: "Category Supertest",
            })
            .set({
                Autorization: `Bearer ${token}`,
            });

        console.log(response);
        expect(response.status).toBe(201);
    });
});
