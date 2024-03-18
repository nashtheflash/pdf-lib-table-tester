import { PDFDocument, StandardFonts, degrees, rgb, cmyk } from 'pdf-lib';

import { StandardField, MultiSelect } from "./";

export function FormFieldsLayout({userPdfSettings, setUserPdfSettings}) {
  return (
    <>
      {
        userPdfSettings && Object.keys(userPdfSettings).map((key) => fieldDefs[key] && (
          <div key={key} className="relative mt-3">
            {
            fieldDefs[key].options ? 
            <MultiSelect
              field={key}
              fieldDef={fieldDefs[key]}
              userPdfSettings ={userPdfSettings}
              setUserPdfSettings ={setUserPdfSettings}
            />
            :
            <StandardField
              field={key}
              fieldDef={fieldDefs[key]}
              userPdfSettings ={userPdfSettings}
              setUserPdfSettings ={setUserPdfSettings}
            />
            }
          </div>
        ))
      }
    </>
  )
};

const colorOptions = [
  { id: 1, name: 'Grey', value: rgb(.56, .56, .56) },
  { id: 2, name: 'White', value: rgb(1, 1, 1) },
  { id: 3, name: 'Blue', value: rgb(.23, .25, .96) },
  { id: 4, name: 'Red', value: rgb(.90, .05, .09) },
  { id: 5, name: 'Yellow', value: rgb(.90, .81, .05) },
  { id: 6, name: 'Orange', value: rgb(.90, .56, .11) },
  { id: 7, name: 'Green', value: rgb(.28, .90, .11) },
  { id: 8, name: 'Purple', value: rgb(.83, .11, .90) },
  { id: 9, name: 'Black', value: rgb(.03, .03, .03)}, //TODO: idk why this does not work
]

const fontOptions = [
  { id: 1, name: 'Courier', value: 'Courier'},
  { id: 2, name: 'CourierBold', value: 'CourierBold'},
  { id: 3, name: 'CourierBoldOblique', value: 'CourierBoldOblique'},
  { id: 4, name: 'CourierOblique', value: 'CourierOblique'},
  { id: 5, name: 'Helvetica', value: 'Helvetica'},
  { id: 6, name: 'HelveticaBold', value: 'HelveticaBold'},
  { id: 7, name: 'HelveticaBoldOblique', value: 'HelveticaBoldOblique'},
  { id: 8, name: 'HelveticaOblique', value: 'HelveticaOblique'},
  { id: 9, name: 'TimesRoman', value: 'TimesRoman'},
  { id: 10, name: 'TimesRomanBold', value: 'TimesRomanBold'},
  { id: 11, name: 'TimesRomanBoldItalic', value: 'TimesRomanBoldItalic'},
  { id: 12, name: 'TimesRomanItalic', value: 'TimesRomanItalic'},
]

const trueFalse = [
  { id: 1, name: 'True', value: true },
  { id: 2, name: 'False', value: false },
]

const tableDefs = {
  startingX: {type: 'number'},
  startingY: {type: 'number'},
  maxTableWidth: {type: 'number'},
  tableBoarder: {type: 'string', options: trueFalse, defaultOption: 0}, 
  tableBoarderThickness: {type: 'number'}, 
  tableBoarderColor:  {type: 'string', options: colorOptions, defaultOption: 0},
  alternateRowColor: {type: 'string', options: trueFalse, defaultOption: 0},
  alternateCellColor: {type: 'string', options: colorOptions, defaultOption: 0},

}


const headerDefs = {
  headerHeight: {type: 'number'},
  headerBackgroundColor: {type: 'string', options: colorOptions, defaultOption: 0},
  
  headerFont: {type: 'string', options: fontOptions, defaultOption: 0},
  headerTextSize: {type: 'number'},
  headerTextAlignment: {type: 'string', options: [{ id: 1, name: 'Left', value: 'left' }, { id: 2, name: 'Center', value: 'center' }, { id: 3, name: 'Right', value: 'right' }], defaultOption: 1},
  headerTextColor: {type: 'string', options: colorOptions, defaultOption: 0},
  
  headerDividedY: {type: 'string', options: trueFalse, defaultOption: 0},
  headerDividedYColor: {type: 'string', options: colorOptions, defaultOption: 0},
  headerDividedXThickness: {type: 'number'},

  headerDividedX: {type: 'string', options: trueFalse, defaultOption: 0},
  headerDividedXColor: {type: 'string', options: colorOptions, defaultOption: 0},
  headerDividedYThickness: {type: 'number'},
  
  headerWrapText: {type: 'string', options: trueFalse, defaultOption: 0},
}

const cellDefs = {
  cellHeight: {type: 'number'},
  cellBackgroundColor: {type: 'string', options: colorOptions, defaultOption: 0},
  cellFont: {type: 'string', options: fontOptions, defaultOption: 0}, //Required
  cellTextSize: {type: 'number'},
  cellTextColor: {type: 'string', options: colorOptions, defaultOption: 0},
  cellPaddingBottom: {type: 'number'},
}







const fieldDefs = {
  //TABLE
  ...tableDefs,
  //Header
  ...headerDefs,
  //CELLS
  ...cellDefs
};