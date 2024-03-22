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
  //     createPdf({ userPdfSettings, setUserPdfSettings, setPdfUrl })
  
  // }, [])

  return (
    <div className='bg-white'>
      <div className='grid grid-cols-4'>
        <div className='col-span-1'>
          <div className='sticky top-0 px-4'>
            <h1 className='text-black mb-3'>Settings</h1>
            <FormFieldsLayout
              userPdfSettings={userPdfSettings}
              setUserPdfSettings={setUserPdfSettings}
              //pdfSettings={pdfSettings}
            />
          </div>
        </div>
        
        <div className='col-span-3'>
          { !pdfUrl ? 'Loading...' :
            <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="1200"
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
  //startingY: page.getHeight(),
  //maxTableWidth: page.getWidth(),
  tableBoarder: true, 
  tableBoarderThickness: 1, 
  tableBoarderColor: rgb(.56, .56, .56),
  alternateRowColor: true, //TODO: add this
  alternateCellColor: true, //TODO: add this
  
  dividedX: true, // Default true - sets if the table has x dividers
  dividedY: true, // Default true - sets if the table has y dividers
  dividedXColor: undefined, // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
  dividedYColor: undefined, // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
  dividedXThickness: 1, // Default 1 - sets x divider thickness
  dividedYThickness: 1, // Default 1 - sets y divider thickness
};

//HEADER SETTINGS
const headerSettings = {
  //Header
  headerHeight: 10,
  headerBackgroundColor: undefined,

  headerFont: StandardFonts.TimesRoman,
  headerTextSize: 10,
  headerTextAlignment: 'center',
  headerTextColor: undefined,
  
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

//CELL SETTINGS
const cellSettings = {
    cellHeight: 8,
    cellBackgroundColor: undefined,
    cellFont: StandardFonts.TimesRoman, //Required
    cellTextSize: 8,
    cellTextColor: undefined,
    cellPaddingBottom: 0,
};



const pdfSettings = {
    ...tableSettings,
    ...subHeadingSetting,
    ...headerSettings,
    ...cellSettings,
};