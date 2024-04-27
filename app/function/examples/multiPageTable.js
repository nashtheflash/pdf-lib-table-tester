import { faker } from '@faker-js/faker';
import { multiPageTableSettings } from '../../lib/multiPageSettings';

export class MultiPage {
  constructor() {

  }

  tableSettings({ data, columns, page, pdfDoc, primaryFont, secondaryFont }) {
    return multiPageTableSettings({ data, columns, page, pdfDoc, primaryFont, secondaryFont });
  }

  get columnDefs() {
    return  [
        {
          columnId:'serial',
          header: 'Serial',
          type: 'text', //text/number/currency
          wrapText: true, //optional
        },
        {
          columnId:'product',
          header: 'Product',
          type: 'text', //text/number/currency
          wrapText: true, //optional
        },
        {
          columnId:'description',
          header: 'Description',
          type: 'text', //text/number/currency
          wrapText: true, //optional
        },
        {
          columnId:'department',
          header: 'Department',
          type: 'text', //text/number/currency
          wrapText: true, //optional
        },
        {
          columnId:'price',
          header: 'Price',
          type: 'text', //text/number/currency
          wrapText: true, //optional
        },
      ]
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
            count: 3000,
        });

        return data;
    }
}
