import { faker } from '@faker-js/faker';
import { singlePageTableSettings } from '../../lib/singlePageSettings';

export class SinglePage {
  constructor() {

  }

  tableSettings({ data, columns, page, pdfDoc, primaryFont, secondaryFont }) {
    return singlePageTableSettings({ data, columns, page, pdfDoc, primaryFont, secondaryFont });
  }

  get columnDefs() {
    return  [
      {
        columnId:'serial',
        header: 'Serial',
        type: 'text', //text/number/currency
      },
      {
        columnId:'product',
        header: 'Product',
        type: 'text', //text/number/currency
      },
      {
        columnId:'description',
        header: 'Description',
        type: 'text', //text/number/currency
      },
      {
        columnId:'department',
        header: 'Department',
        type: 'text', //text/number/currency
      },
      {
        columnId:'price',
        header: 'Price',
        type: 'text', //text/number/currency
      },
    ]
  }
    
  get data() {

    const dataTemplate = () => ({
      serial: faker.commerce.isbn(10),
      product: 'Gloves',
      description: faker.commerce.productDescription(),
      department: faker.commerce.department(),
      price: faker.commerce.price(),
    });

    let data = faker.helpers.multiple(dataTemplate, {
      count: 8,
    });

    return data;
  }
}
