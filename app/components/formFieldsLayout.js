'use client';

import { rgb } from 'pdf-lib';
import { useState } from 'react';
import { StandardField, MultiSelect } from "./";

export function FormFieldsLayout({userPdfSettings, setUserPdfSettings}) {
  const [openSections, setopenSection] = useState(false);

  const handelAccordianClick = (e, section) => {
    setopenSection((prevState) => {
      if(prevState === section) return false;
      return section;
    });
  };

  return (
    <>
      {
        Object.keys(userPdfSettings).map((section) => {
          return (
            <form key={section} className="collapse collapse-arrow bg-base-100 mb-2">
              <input 
                type="radio"
                // ref={e => accodianRef.current[section] = {element: e, open: false} } 
                onClick={(e) => handelAccordianClick(e, section)} 
                onChange={() => ''}
                name="my-accordion-2" 
                className="w-full"
                checked={openSections === section ? true : false}
              /> 
              <div className="collapse-title text-xl font-medium text-primary">
                {section}
              </div>
              <div className="collapse-content text-gray-500"> 
                <FormInputs 
                  userPdfSettings={userPdfSettings}
                  setUserPdfSettings={setUserPdfSettings}
                  section={section}
                />
              </div>
            </form>
          )
        })
      }
    </>
  )
};


export function FormInputs({userPdfSettings, setUserPdfSettings, section}) {
  return (
    <>
      {
        userPdfSettings[section] && Object.keys(userPdfSettings[section]).map((key) => fieldDefs[key] && (
          <div key={key} className="relative mt-3">
            {
              fieldDefs[key].options ? 
              <MultiSelect
                field={key}
                fieldDef={fieldDefs[key]}
                userPdfSettings ={userPdfSettings}
                setUserPdfSettings ={setUserPdfSettings}
                section={section}
              />
              :
              <StandardField
                field={key}
                fieldDef={fieldDefs[key]}
                userPdfSettings ={userPdfSettings}
                setUserPdfSettings ={setUserPdfSettings}
                section={section}
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
  { id: 9, name: 'Black', value: rgb(0, 0, 0)}, //TODO: idk why this does not work
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

  dividedX: {type: 'string', options: trueFalse, defaultOption: 0},
  dividedY: {type: 'string', options: trueFalse, defaultOption: 0},
  dividedXColor:  {type: 'string', options: colorOptions, defaultOption: 0},
  dividedYColor:  {type: 'string', options: colorOptions, defaultOption: 0},
  dividedXThickness: {type: 'number'},
  dividedYThickness: {type: 'number'},

  continuationFont: {type: 'string', options: fontOptions, defaultOption: 0}, // Text font
  continuationTextX: {type: 'number'}, // Text starting X
  continuationTextY: {type: 'number'}, //Text starting Y
  continuationFontSize: {type: 'number'}, // text font size
  continuationFillerHeight: {type: 'number'}, // this is the hight that will be left by the table
  continuationText: {type: 'text'},

  appendedPageStartX: {type: 'number'},
  appendedPageStartY: {type: 'number'},
  appendedMaxTableWidth: {type: 'number'},
}


const headerDefs = {
  headerHeight: {type: 'number'},
  headerBackgroundColor: {type: 'string', options: colorOptions, defaultOption: 0},
  
  headerFont: {type: 'string', options: fontOptions, defaultOption: 0},
  headerTextSize: {type: 'number'},
  headerTextAlignment: {type: 'string', options: [{ id: 1, name: 'Left', value: 'left' }, { id: 2, name: 'Center', value: 'center' }, { id: 3, name: 'Right', value: 'right' }], defaultOption: 0},
  headerTextJustification: {type: 'string', options: [{ id: 1, name: 'Top', value: 'top' }, { id: 2, name: 'Center', value: 'center' }, { id: 3, name: 'Bottom', value: 'bottom' }], defaultOption: 0},
  headerTextColor: {type: 'string', options: colorOptions, defaultOption: 0},
  
  headerDividedY: {type: 'string', options: trueFalse, defaultOption: 0},
  headerDividedYColor: {type: 'string', options: colorOptions, defaultOption: 0},
  headerDividedXThickness: {type: 'number'},

  headerDividedX: {type: 'string', options: trueFalse, defaultOption: 0},
  headerDividedXColor: {type: 'string', options: colorOptions, defaultOption: 0},
  headerDividedYThickness: {type: 'number'},
  
  //headerWrapText: {type: 'string', options: trueFalse, defaultOption: 0},
}

const rowDefs = {
  rowBackgroundColor: {type: 'string', options: colorOptions, defaultOption: 1},
  alternateRowColor: {type: 'string', options: trueFalse, defaultOption: 0},
  alternateRowColorValue: {type: 'string', options: colorOptions, defaultOption: 0},
}

const cellDefs = {
  cellFont: {type: 'string', options: fontOptions, defaultOption: 8}, //Required
  cellTextSize: {type: 'number'},
  cellLineHeight: {type: 'number'},
  cellTextColor: {type: 'string', options: colorOptions, defaultOption: 8},
  //additionalWrapCharacters,
  //cellHeight: {type: 'number'},
  //cellBackgroundColor: {type: 'string', options: colorOptions, defaultOption: 0},
  // cellPaddingBottom: {type: 'number'},
}

const fieldDefs = {
  //TABLE
  ...tableDefs,
  //Header
  ...headerDefs,
  //Row
  ...rowDefs,
  //CELLS
  ...cellDefs
};