
export const tableData = () =>  {
  let data = [];

  for (let loop = 0; loop < 1; loop ++) {
    data = [
      ...data,
      {
        inventory: 10223,
        inventory_date: '2024-03-17',
        serial: '1',
        model: 'test',
        Manufacturer: 'type',
        item_type: 'des',
        description: 'des',
        hd_qty: 1,
        hd_wiped: 2,
        complete_qty: 2,
        incomplete_qty: 2,
        Notes: 'this is a note',
      },
      {
        inventory: 10223,
        inventory_date: '2024-03-17',
        serial: 'abcdefg123456789',
        model: 'test',
        Manufacturer: 'type',
        item_type: 'des',
        description: 'des',
        hd_qty: 1,
        hd_wiped: 2,
        complete_qty: 2,
        incomplete_qty: 2,
        Notes: 'this is a note',
      },
      {
        inventory: 10223,
        inventory_date: '2024-03-17',
        serial: '1',
        model: 'test',
        Manufacturer: 'type',
        item_type: 'des',
        description: 'des',
        hd_qty: 1,
        hd_wiped: 2,
        complete_qty: 2,
        incomplete_qty: 2,
        Notes: 'this is a note',
      },
      {
        inventory: 10223,
        inventory_date: '2024-03-17',
        serial: 'F62281',
        model: 'FibroScan 502 Touch',
        Manufacturer: 'Echosens',
        item_type: 'Body Scan',
        description: 'Medical Equipment',
        hd_qty: 1,
        hd_wiped: 'abc123/def/987348/thry/78956/slkjvuywer/fdilviqergbierjg',
        complete_qty: 2,
        incomplete_qty: 2,
        Notes: 'this is a note',
      },
      {
        inventory: 10223,
        inventory_date: '2024-03-17',
        serial: 'F62281',
        model: 'FibroScan 502 Touch',
        Manufacturer: 'Echosens',
        item_type: 'Body Scan',
        description: 'Medical Equipmen',
        hd_qty: 1,
        hd_wiped: 'abc123/def/987348/thry/78956/slkjvuywer/fdilviqergbierjg',
        complete_qty: 2,
        incomplete_qty: 2,
        Notes: 'this is a note',
      },
    ];
  };
  return data
}
























// export const tableData = [
//     {
//       // header1: 'row1Column1 this is a bit longer and probably needs to be wraped but it is tough to tell',
//       header1: 'row1Column1 test',
//       // header2: 'row1Column2',
//       header2: 'row1Column2 this is a bit longer and probablyyyyyyyyyyyy needs to be wraped but it is tough to tell byt i want this one to go to the next line and it will',
//       header3: 'row1Column3 data',
//       header4: 'row1Column4',
//     },
//     {
//       header1: 'row2Column1',
//       header2: 'row2Column2',
//       // header2: 'row2Column2 this is a bit longer and probably needs to be wraped but it is tough to tell',
//       header3: 'row2Column3',
//       header4: 'row2Column4 this is a longer text block for number 4',
//     }, 
//     // {
//     //   subHeading: {
//     //     sectionId: 'Sec1', //Required
//     //     sectionLabel: 'Section 1',
//     //     sectionCount: 4
//     //   }
//     // },
//     // {
//     //   header1: 'row3Column1',
//     //   header2: 'row3Column2',
//     //   // header3: 'row3Column3'
//     //   header3: 'row3Column3 this is a bit longer and probably needs to be wraped'
//     // },
//     // {
//     //   subHeading: {
//     //     sectionId: 'Sec2', //Required
//     //     sectionLabel: 'Section Total',
//     //     sectionTotal: 400
//     //   }
//     // },
//     {
//       header1: 'row4Column1 this is a long text that is for column 1 and I hope that is wraps',
//       header2: 'row4Column2 this si a longer and longer and longer and longer and longer',
//       header3: 'row4Column3',
//       header4: 'row4Column4',
//     },
//     // {
//     //   header1: 'row5Column1',
//     //   header2: 'row5Column2',
//     //   header3: 'row5Column3'
//     // },
//     // {
//     //   header1: 'row6Column1',
//     //   header2: 'row6Column2',
//     //   header3: 'row6Column3'
//     // },
//     {
//       header1: 'row7Column1',
//       header2: 'row7Column2',
//       header3: 'row7Column3 this is a longer bit of text for number 3',
//       header4: 'row7Column4',
//     },
//   ]