'use client';

import { useState, useEffect } from "react";
import { FormFieldsLayout } from "./formFieldsLayout";

import { createPdf, createInitPdf } from "../function";




import { PDFDocument, StandardFonts, degrees, rgb } from 'pdf-lib';
// import { drawTable } from 'pdf-lib-table';
import { columnDefs } from '../definition';
import { subHeadingDefs } from '../definition';
import { tableData } from '../data';





export function HomeLayout({  }) {
  const [pdfUrl, setPdfUrl] = useState();
  const [userPdfSettings, setUserPdfSettings] = useState(pdfSettings);
    
    
  useEffect(() => {
      
    createPdf({ userPdfSettings, setUserPdfSettings, setPdfUrl });
      
  }, [userPdfSettings])
  
  // useEffect(() => {
  //   console.log(userPdfSettings);
  // }, [userPdfSettings])

  return (
    <div className='bg-base-200 min-h-screen'>
      <div className='grid grid-cols-4 justify-center'>
        <div className='col-span-1'>
          <div className='sticky top-0 px-4 pt-5'>
            <h1 className="text-primary">PDF-LIB-TABLE</h1>
            <div className="flex flex-col w-full">
              <div className="divider divider-primary mt-0"></div>
            </div>
            <FormFieldsLayout
              userPdfSettings={userPdfSettings}
              setUserPdfSettings={setUserPdfSettings}
              //pdfSettings={pdfSettings}
            />
            </div>
          </div>
        <div className='col-span-3 h-screen'>
        <div className="navbar bg-base-200">
          <a className="btn btn-ghost text-xl text-primary">Example 1</a>
          <a className="btn btn-ghost text-xl text-primary">Example 2</a>
          <a className="btn btn-ghost text-xl text-primary">Example 3</a>
          <a className="btn btn-ghost text-xl text-primary">Example 4</a>
        </div>
          { !pdfUrl ? 
            <div className="flex flex-col h-full w-full p-5 justify-center items-center">
              <div className="skeleton w-full h-full"></div>
            </div> 
            :
            <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="100%"
            src={pdfUrl}
            >
          </iframe>
          }
        </div>
      </div>
    </div>
  );
};


//TABLE SETTINGS
const tableSettings = {
  data: tableData(), //Required
  columns: columnDefs,
  //page, //Required
  pageOrientation: 'protrate', //TODO: finish this
  //pdfDoc, //Required
  fonts: StandardFonts,
  startingX: 0,
  startingY: 612,
  maxTableWidth: 792,
  tableBoarder: true, 
  tableBoarderThickness: 1, 
  tableBoarderColor: rgb(.56, .56, .56),
  // alternateRowColor: true, //TODO: add this
  // alternateCellColor: true, //TODO: add this
  
  dividedX: true, // Default true - sets if the table has x dividers
  dividedY: true, // Default true - sets if the table has y dividers
  dividedXColor: undefined, // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
  dividedYColor: undefined, // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
  dividedXThickness: 1, // Default 1 - sets x divider thickness
  dividedYThickness: 1, // Default 1 - sets y divider thickness

  //Continuation
  continuationFont: StandardFonts.TimesRomanBold, // Text font
  continuationTextX: '', // Text starting X
  continuationTextY: 10, //Text starting Y
  continuationFontSize: 15, // text font size
  continuationFillerHeight: 20, // this is the hight that will be left by the table
  continuationText: 'Continues on Next Page',
};

//HEADER SETTINGS
const headerSettings = {
  //Header
  headerHeight: undefined,
  headerBackgroundColor: undefined,

  headerFont: StandardFonts.TimesRomanBold,
  headerTextSize: 10,
  headerTextColor: undefined,
  headerTextAlignment: 'left',
  headerTextJustification: 'top',
  
  headerDividedY: true,
  headerDividedYColor: undefined,
  headerDividedYThickness: 0,

  headerDividedX: true,
  headerDividedXColor: undefined,
  headerDividedXThickness: 1,
  
  headerWrapText: true,
};

//SUBHEADING SETTINGS
const subHeadingSetting = {
  subHeadings: subHeadingDefs,
};

//ROW SECTION
const rowSettings = {
  rowBackgroundColor: undefined,
  alternateRowColor: true,
  alternateRowColorValue: undefined
};

//CELL SETTINGS
const cellSettings = {
  cellFont: undefined, //Required
  cellTextColor: undefined,
  cellBackgroundColor: undefined,
  cellTextSize: undefined,
  cellLineHeight: 10,
  cellPaddingBottom: 0,
  cellHeight: 8,
};



const pdfSettings = {
  Table: tableSettings,
  Header: headerSettings,
  Row: rowSettings,
  Cell: cellSettings,
  Subheader: subHeadingSetting,
};