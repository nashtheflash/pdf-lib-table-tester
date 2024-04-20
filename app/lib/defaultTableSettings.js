import { StandardFonts, rgb } from 'pdf-lib';
import { columnDefs } from '../definition';
import { tableData } from '../data';

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
    // subHeadings: subheadingColumnDefs,
    //SUB HEADINGS
    // subheadingColumns,
    subHeadingBackgroundColor: rgb(0, 0, 0),
    subHeadingHeight: 12,
    subHeadingFont: 'TimesRomanBold',
    subHeadingTextColor: rgb(0, 0, 0),
    subHeadingTextSize: 10,
    subHeadingLineHeight: 10,
    subHeadingDividedX: true,
    subHeadingDividedXThickness: 1,
    subHeadingDividedXColor: rgb(0, 0, 0),
    subHeadingDividedY: true,
    subHeadingDividedYThickness: 1,
    subHeadingDividedYColor: rgb(0, 0, 0),
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
  
  
  
  export const pdfSettings = {
    Table: tableSettings,
    Header: headerSettings,
    Row: rowSettings,
    Cell: cellSettings,
    Subheader: subHeadingSetting,
  };