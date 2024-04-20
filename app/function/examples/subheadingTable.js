import { faker } from '@faker-js/faker';
import { subheadingPageTableSettings } from '../../lib/subheadingPageSettings';

export class Subheading {
    constructor() {
  
    }
  
    tableSettings({ data, columns, page, pdfDoc, primaryFont, secondaryFont }) {
      return subheadingPageTableSettings({ data, columns, page, pdfDoc, primaryFont, secondaryFont });
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
  
      const dataTemplateGloves = () => ({
        serial: faker.commerce.isbn(10),
        product: 'Gloves',
        description: faker.commerce.productDescription(),
        department: faker.commerce.department(),
        price: faker.commerce.price(),
      });
      
      const dataTemplateKeyboards = () => ({
        serial: faker.commerce.isbn(10),
        product: 'Keyboards',
        description: faker.commerce.productDescription(),
        department: faker.commerce.department(),
        price: faker.commerce.price(),
      });

      let gloveData = faker.helpers.multiple(dataTemplateGloves, { count: 8 })

      gloveData.push({
        subheading: {
          type: 'Gloves: 8',
          total: `Total: $${gloveData.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price) , 0)}`
        }
      })
      
      let keyboardData = faker.helpers.multiple(dataTemplateGloves, { count: 10 })

      keyboardData.push({
        subheading: {
          type: 'Keyboards: 10',
          total: `Total: $${keyboardData.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price) , 0)}`
        }
      })

      let mouseData = faker.helpers.multiple(dataTemplateGloves, { count: 3 })

      mouseData.push({
        subheading: {
          type: 'mouse: 3',
          total: `Total: $${mouseData.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price) , 0)}`
        }
      })



  
      return [...gloveData, ...keyboardData, ...mouseData];
    }
}