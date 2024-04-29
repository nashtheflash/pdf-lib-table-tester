import { PDFDocument, StandardFonts, degrees, rgb } from 'pdf-lib';
import { subheadingColumnDefs } from '@/app/definition';

export const horizontalPageTableSettings = ({data, columns, page, pdfDoc, primaryFont, secondaryFont }) => {
    
    //TABLE SETTINGS
    const tableSettings = {
        data: data, //Required
        columns: columns,
        page: page, //Required
        pdfDoc: pdfDoc, //Required
        pageOrientation: 'protrate',
        fonts: StandardFonts,
        tableType: 'horizontal',
        startingX: 0 + (page.getWidth() / 12),
        startingY: page.getHeight() - 50,
        maxTableWidth: page.getWidth() - ((page.getWidth() / 12) * 2),
        tableBoarder: true, 
        tableBoarderThickness: 1, 
        tableBoarderColor:  rgb(.56, .56, .56),
        
        dividedX: true,
        dividedY: true, // Default true - sets if the table has y dividers
        dividedXColor: undefined, // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
        dividedYColor: undefined, // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
        dividedXThickness: 1, // Default 1 - sets x divider thickness
        dividedYThickness: 1, // Default 1 - sets y divider thickness
        // subheadingColumns: subheadingColumnDefs,

        //Continuation
        continuationFont: secondaryFont, // Text font
        continuationTextX: undefined, // Text starting X
        continuationTextY: 10, //Text starting Y
        continuationFontSize: 15, // text font size
        continuationFillerHeight: 20, // this is the hight that will be left by the table
        continuationText: 'Continues on Next Page',

        appendedPageStartX:  0 + (page.getWidth() / 12),
        appendedPageStartY: page.getHeight() - 50,
        appendedMaxTableWidth: page.getWidth() - ((page.getWidth() / 12) * 2),
    };

    //HEADER SETTINGS
    const headerSettings = {
        //Header
        headerHeight: undefined,
        headerBackgroundColor: rgb(.03, .03, .03),

        headerFont: primaryFont,
        headerTextSize: 10,
        headerTextAlignment: 'center',
        headerTextJustification: 'top',
        headerTextColor: undefined,
        
        headerDividedY: true,
        headerDividedYColor: rgb(.03, .03, .03),
        headerDividedYThickness: 0,

        headerDividedX: true,
        headerDividedXColor: undefined,
        headerDividedXThickness: 1,

        headerWrapText: true,
    };

    //ROW SECTION
    const rowSettings = {
        rowBackgroundColor: rgb(1, 1, 1),
        alternateRowColor: true,
        alternateRowColorValue: rgb(.21, .24, .85),
    };

    //CELL SETTINGS
    const cellSettings = {
        cellFont: secondaryFont, //Required
        cellTextSize: 10,
        cellLineHeight: 10,
        cellTextColor: undefined,
        additionalWrapCharacters: ['/']
    };

    //SUBHEADING SETTINGS
    const subHeadingSetting = {
        // subHeadings: subheadingColumnDefs,
        //SUB HEADINGS
        subHeadingColumns: [],
        subHeadingBackgroundColor: rgb(0, 0, 0),
        subHeadingHeight: 12,
        subHeadingFont: secondaryFont,
        subHeadingTextColor: rgb(0, 0, 0),
        subHeadingTextSize: 10,
        subHeadingLineHeight: 10,
        subHeadingDividedX: true,
        subHeadingDividedXThickness: 1,
        subHeadingDividedXColor: rgb(0, 0, 0),
        subHeadingDividedY: true,
        subHeadingDividedYThickness: 1,
        subHeadingDividedYColor: rgb(0, 0, 0),
        subHeadingWrapText: true,
      };


    return {
        ...tableSettings,
        ...headerSettings,
        ...rowSettings,
        ...cellSettings,
        ...subHeadingSetting,
    }
};
