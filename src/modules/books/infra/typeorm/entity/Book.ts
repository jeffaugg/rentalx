import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuid4 } from "uuid";
import { Category } from "./Category";
import { Specification } from "./Specification";

@Entity("book")
class Book {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    daily_rate: number;

    @Column()
    available: boolean;

    @Column()
    fine_amount: number;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column()
    category_id: string;

    @ManyToMany(() => Specification)
    @JoinTable({
        name: "specification_books",
        joinColumns: [{ name: "book_id" }],
        inverseJoinColumns: [{ name: "specification_id" }],
    })
    specifications: Specification[];

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid4();
            this.available = true;
        }
    }
}

export { Book };
