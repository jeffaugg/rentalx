interface ICreateBookDTO {
    name: string;
    description: string;
    daily_rate: number;
    fine_amount: number;
    category_id: string;
}

export { ICreateBookDTO };
