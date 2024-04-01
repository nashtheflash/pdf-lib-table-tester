'use client';

import { useState, useEffect } from "react";
import { FormFieldsLayout, CopyCode, NavBar, About} from ".";

import { createPdf } from "../function";

import { StandardFonts, rgb } from 'pdf-lib';
import { columnDefs } from '../definition';
import { subHeadingDefs } from '../definition';
import { tableData } from '../data';


const pages = [
  {name: 'Single Page', current: true},
  {name: 'Multi Page', current: false},
  {name: 'Fitting Templates', current: false},
  {name: 'Kitchen Sink', current: false},
  {name: 'About', current: false},
];



export function HomeLayout({  }) {
  const [pdfUrl, setPdfUrl] = useState();
  const [userPdfSettings, setUserPdfSettings] = useState(pdfSettings);
  const [isPro, setIsPro] = useState(true);
  const [nav, setNav] = useState(pages);
    
  useEffect(() => {
    createPdf({ userPdfSettings, setUserPdfSettings, setPdfUrl });
  }, [userPdfSettings]);

  return (
    <div className='bg-base-200'>
      <div className='grid grid-cols-4 h-screen justify-center'>


      {/* <div class="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll"> */}
        <div className='col-span-1 h-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primary scrollbar-track-slate-300 scrollbar-w-2 overflow-y-auto overflow-x-hidden'>
          <div className='sticky top-0 px-2 pt-5'>
            <h1 className="text-primary">PDF-LIB-TABLE</h1>
            <div className="flex flex-col w-full">
              <div className="divider divider-primary mt-0"></div>
            </div>
            <CopyCode
              isPro={isPro}
              setIsPro={setIsPro}
            />
            <FormFieldsLayout
              userPdfSettings={userPdfSettings}
              setUserPdfSettings={setUserPdfSettings}
            />
          </div>
        </div>

      {/* </div> */}

        <div className='col-span-3 h-full overflow-y-hidden'>
          <div className="h-16">
            <NavBar
              nav={nav}
              setNav={setNav}
            />
          </div>
          <div className="w-full px-2 pb-3 h-[calc(100vh-64px)]">
            { !pdfUrl ? 
              <div className="skeleton w-full h-full"></div>
              :
              nav[4].current ? 
              <About/>
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

  //Appended pages
  appendedPageStartX: 0,
  appendedPageStartY: 612,
  appendedMaxTableWidth: 792,
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