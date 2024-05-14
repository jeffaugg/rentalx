import { v4 as uuid4 } from 'uuid';

class Category {
    id?: string;    //coloca como opcional o construtor cria o id
    name: string;
    description: string;
    created_at?: Date;


    constructor() {
        if (!this.id) {
            this.id = uuid4();
            this.created_at = new Date()
        }
    }

}



export { Category }