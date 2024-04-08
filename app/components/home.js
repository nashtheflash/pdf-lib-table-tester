'use client';

import { useState, useEffect } from "react";
import { FormFieldsLayout, CopyCode, NavBar, TableIframe} from ".";
import { About, Pro, SinglePageExample, MultiPageExample } from "./pages";

import { createPdf, Doc, SinglePage, MultiPage} from "../function";

import { StandardFonts, rgb } from 'pdf-lib';
import { columnDefs } from '../definition';
import { subHeadingDefs } from '../definition';
import { tableData } from '../data';



const pages = [
  {name: 'Single Page', current: true},
  {name: 'Multi Page', current: false},
  {name: 'Horizontal', current: false},
  {name: 'Invoice', current: false},
  {name: 'About', current: false},
  {name: 'Pro', current: false},
];



export function HomeLayout({  }) {
  const [nav, setNav] = useState(pages);
  const [isPro, setIsPro] = useState(true);
  const [userPdfSettings, setUserPdfSettings] = useState(pdfSettings);
  const [pdfUrl, setPdfUrl] = useState();
    
  useEffect(() => {
    const document = new Doc();
    nav[0].current ? document.type = new SinglePage() : document.type = new MultiPage();
    const data = document.data();

    if(pdfUrl) createPdf({ data, userPdfSettings, setUserPdfSettings, setPdfUrl });

  }, [userPdfSettings]);
  
  useEffect(() => { //TODO: move to server?

    const document = new Doc();
    document.type = new SinglePage();
    document.draw({ userPdfSettings, setUserPdfSettings, setPdfUrl });

  }, []);

  return (
    <div className='bg-base-200'>
      <div className='grid grid-cols-4 h-screen justify-center'>
        <div className='col-span-1 h-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primary scrollbar-track-slate-300 scrollbar-w-2 overflow-y-auto overflow-x-hidden'>
          <div className='sticky top-0 px-2 pt-5'>
            <h1 className="text-primary">PDF-LIB-TABLE</h1>
            <div className="flex flex-col w-full">
              <div className="divider divider-primary mt-0"></div>
            </div>
            <CopyCode
              isPro={isPro}
              setIsPro={setIsPro}
              userPdfSettings={userPdfSettings}
            />
            <FormFieldsLayout
              userPdfSettings={userPdfSettings}
              setUserPdfSettings={setUserPdfSettings}
            />
          </div>
        </div>
        <div className='col-span-3 h-full overflow-y-hidden'>
          <div className="h-16">
            <NavBar
              nav={nav}
              setNav={setNav}
            />
          </div>
          <div className="w-full px-2 pb-3 h-[calc(100vh-64px)]">
            { 
            !pdfUrl ? <div className="skeleton w-full h-full"></div> :
            nav[0].current ? <SinglePageExample userPdfSettings={userPdfSettings} setUserPdfSettings={setUserPdfSettings} pdfUrl={pdfUrl} setPdfUrl={setPdfUrl}/> :
            nav[1].current ? <MultiPageExample userPdfSettings={userPdfSettings} setUserPdfSettings={setUserPdfSettings} pdfUrl={pdfUrl} setPdfUrl={setPdfUrl}/> :
            nav[4].current ? <About isPro={isPro} setIsPro={setIsPro} userPdfSettings={userPdfSettings}/> :
            nav[5].current ? <Pro/> :
            <TableIframe url={pdfUrl}/>
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
  pageOrientation: 'portrait', //TODO: finish this landscape
  fonts: StandardFonts,
  startingX: 0,
  startingY: 612,
  maxTableWidth: 792,
  tableBoarder: true, 
  tableBoarderThickness: 1, 
  tableBoarderColor: rgb(.56, .56, .56),
  
  dividedX: true, // Default true - sets if the table has x dividers
  dividedY: true, // Default true - sets if the table has y dividers
  dividedXColor: rgb(0, 0, 0), // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
  dividedYColor: rgb(0, 0, 0), // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
  dividedXThickness: 1, // Default 1 - sets x divider thickness
  dividedYThickness: 1, // Default 1 - sets y divider thickness

  //Continuation
  continuationFont: 'TimesRomanBold', // Text font
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
  headerHeight: undefined,
  headerBackgroundColor: rgb(.03, .03, .03),
  headerFont: 'TimesRomanBold',
  headerTextSize: 10,
  headerTextColor: rgb(0, 0, 0),
  headerTextAlignment: 'left',
  headerTextJustification: 'top',
  headerDividedY: true,
  headerDividedYColor: rgb(0, 0, 0),
  headerDividedYThickness: 0,
  headerDividedX: true,
  headerDividedXColor: rgb(0, 0, 0),
  headerDividedXThickness: 1,
  headerWrapText: true,
};

//SUBHEADING SETTINGS
const subHeadingSetting = {
  subHeadings: subHeadingDefs,
};

//ROW SECTION
const rowSettings = {
  rowBackgroundColor: rgb(1, 1, 1),
  alternateRowColor: true,
  alternateRowColorValue: rgb(.03, .03, .03)
};

//CELL SETTINGS
const cellSettings = {
  cellFont: "TimesRoman", //Required
  cellTextColor: rgb(0, 0, 0),
  cellTextSize: 10,
  cellLineHeight: 10,
  additionalWrapCharacters: [],
  //cellHeight: 8,
  //cellBackgroundColor: undefined,
  //cellPaddingBottom: 0,
};



const pdfSettings = {
  Table: tableSettings,
  Header: headerSettings,
  Row: rowSettings,
  Cell: cellSettings,
  Subheader: subHeadingSetting,
};