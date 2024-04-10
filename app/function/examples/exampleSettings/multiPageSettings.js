import { StandardFonts, rgb } from 'pdf-lib';
import { subheadingColumnDefs } from '@/app/definition';

export const multiPageTableSettings = ({data, columns, page, pdfDoc, primaryFont, secondaryFont }) => {
    
    //TABLE SETTINGS
    const tableSettings = {
        data: data, //Required
        columns: columns,
        page: page, //Required
        pdfDoc: pdfDoc, //Required
        pageOrientation: 'protrate',
        fonts: StandardFonts,
        startingX: 0 + (page.getWidth() / 12),
        startingY: page.getHeight() - 20,
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
        headerBackgroundColor: undefined,

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
        rowBackgroundColor: undefined,
        alternateRowColor: true,
        alternateRowColorValue: undefined
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
        subHeadings: subheadingColumnDefs,
    };


    return {
        Table: tableSettings,
        Header: headerSettings,
        Row: rowSettings,
        Cell: cellSettings,
        Subheader: subHeadingSetting,
    }
};
