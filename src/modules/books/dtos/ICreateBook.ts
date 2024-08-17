import { Specification } from "../infra/typeorm/entity/Specification";

interface ICreateBookDTO {
    name: string;
    description: string;
    daily_rate: number;
    fine_amount: number;
    category_id: string;
    specifications?: Specification[];
    id?: string;
}

export { ICreateBookDTO };
