import { faker } from '@faker-js/faker';

export class SinglePage {
    constructor() {

    }

    get data() {

        const dataTemplate = () => ({
            serial: faker.commerce.isbn(10),
            product: faker.commerce.product(),
            description: faker.commerce.productDescription(),
            department: faker.commerce.department(),
            price: faker.commerce.price(),
        });

        const data = faker.helpers.multiple(dataTemplate, {
            count: 5,
        });

        return data;
    }
}