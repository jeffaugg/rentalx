import { v4 as uuid4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("specifications")
class Specification {
    @PrimaryColumn()
    id?: string; //coloca como opcional o construtor cria o id
    @Column()
    name: string;
    @Column()
    description: string;
    @CreateDateColumn()
    created_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid4();
            this.created_at = new Date();
        }
    }
}

export { Specification };
