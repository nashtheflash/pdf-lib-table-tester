//import { useState } from 'react';

import { PDFDocument, StandardFonts, degrees, rgb } from 'pdf-lib';
import { drawTable } from 'pdf-lib-table';
import { columnDefs } from '../definition';
import { subHeadingDefs } from '../definition';
import { tableData } from '../data';

export async function createPdf({ userPdfSettings, setUserPdfSettings, setPdfUrl}) {


    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([792.0, 612.0]);
    const data = await tableData();
    //console.log(data);
    
    //add fonts to the doc
    const [
        //Courier,
        // CourierBold,
        // CourierBoldOblique,
        // CourierOblique,
        Helvetica,
        HelveticaBold,
        HelveticaBoldOblique,
        HelveticaOblique,
        TimesRoman,
        TimesRomanBold,
        TimesRomanBoldItalic,
        TimesRomanItalic,
    ] = await Promise.all([
        //pdfDoc.embedFont(StandardFonts.Courier),              //TODO: Remove not suported
        //pdfDoc.embedFont(StandardFonts.CourierBold),          //TODO: Remove not suported
        //pdfDoc.embedFont(StandardFonts.CourierBoldOblique),   //TODO: Remove not suported
        //pdfDoc.embedFont(StandardFonts.CourierOblique),       //TODO: Remove not suported
        pdfDoc.embedStandardFont(StandardFonts.Helvetica),              //Supported
        pdfDoc.embedStandardFont(StandardFonts.HelveticaBold),          //Supported
        pdfDoc.embedStandardFont(StandardFonts.HelveticaBoldOblique),   //Supported
        pdfDoc.embedStandardFont(StandardFonts.HelveticaOblique),       //Supported
        pdfDoc.embedStandardFont(StandardFonts.TimesRoman),             //Supported
        pdfDoc.embedStandardFont(StandardFonts.TimesRomanBold),         //Supported
        pdfDoc.embedStandardFont(StandardFonts.TimesRomanBoldItalic),   //Supported
        pdfDoc.embedStandardFont(StandardFonts.TimesRomanItalic),       //Supported
    ])

    const fontLookup = {
        //Courier,
        // CourierBold,
        // CourierBoldOblique,
        // CourierOblique,
        Helvetica,
        HelveticaBold,
        HelveticaBoldOblique,
        HelveticaOblique,
        TimesRoman,
        TimesRomanBold,
        TimesRomanBoldItalic,
        TimesRomanItalic,
    };

    //TABLE SETTINGS
    const tableSettings = {
        data: data, //Required
        columns: columnDefs,
        page, //Required
        pageOrientation: userPdfSettings?.Table.pageOrientation || 'protrate', //TODO: finish this
        pdfDoc, //Required
        fonts: StandardFonts,
        startingX: Number(userPdfSettings?.Table.startingX) || 0,
        startingY: Number(userPdfSettings?.Table.startingY) || page.getHeight(),
        maxTableWidth: Number(userPdfSettings?.Table.maxTableWidth) || page.getWidth(),
        tableBoarder: userPdfSettings?.Table.tableBoarder, 
        tableBoarderThickness: Number(userPdfSettings?.Table.tableBoarderThickness) || 1, 
        tableBoarderColor:  userPdfSettings?.Table.tableBoarderColor || rgb(.56, .56, .56),
        alternateRowColor: userPdfSettings?.Table.alternateRowColor, //TODO: add this
        alternateCellColor: userPdfSettings?.Table.alternateCellColor, //TODO: add this
        
        dividedX: userPdfSettings?.Table.dividedX, // Default true - sets if the table has x dividers
        dividedY: userPdfSettings?.Table.dividedY, // Default true - sets if the table has y dividers
        dividedXColor: userPdfSettings?.Table.dividedXColor, // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
        dividedYColor: userPdfSettings?.Table.dividedYColor, // Default rgb(0,0,0) - can pass in any pdf-lib rgb value
        dividedXThickness: Number(userPdfSettings?.Table.dividedXThickness) || 1, // Default 1 - sets x divider thickness
        dividedYThickness: Number(userPdfSettings?.Table.dividedYThickness) || 1, // Default 1 - sets y divider thickness
    };

    //HEADER SETTINGS
    const headerSettings = {
        //Header
        headerHeight: Number(userPdfSettings?.Header.headerHeight) || undefined,
        headerBackgroundColor: userPdfSettings?.Header.headerBackgroundColor || undefined,

        headerFont: fontLookup[userPdfSettings?.Header.headerFont] || fontLookup.TimesRomanBold,
        headerTextSize: Number(userPdfSettings?.Header.headerTextSize) || 10,
        headerTextAlignment: userPdfSettings?.Header.headerTextAlignment || 'center',
        headerTextJustification: userPdfSettings?.Header.headerTextJustification || 'top',
        headerTextColor: userPdfSettings?.Header.headerTextColor,
        
        headerDividedY: userPdfSettings?.Header.headerDividedY,
        headerDividedYColor: userPdfSettings?.Header.headerDividedYColor || rgb(.03, .03, .03),
        headerDividedYThickness: Number(userPdfSettings?.Header.headerDividedYThickness) || 0,
    
        headerDividedX: userPdfSettings?.Header.headerDividedX,
        headerDividedXColor: userPdfSettings?.Header.headerDividedXColor,
        headerDividedXThickness: Number(userPdfSettings?.Header.headerDividedXThickness) || 1,
        
        headerWrapText: !userPdfSettings || userPdfSettings?.Header.headerWrapText == true ? true : false,
    };

    //SUBHEADING SETTINGS
    const subHeadingSetting = {
        subHeadings: subHeadingDefs,
    };

    //CELL SETTINGS
    const cellSettings = {
        cellHeight: Number(userPdfSettings?.Cell.cellHeight) || undefined,
        cellBackgroundColor: userPdfSettings?.Cell.cellBackgroundColor,
        cellFont: fontLookup[userPdfSettings?.Cell.cellFont] || fontLookup.TimesRoman, //Required
        cellTextSize: Number(userPdfSettings?.Cell.cellTextSize) || 10,
        cellLineHeight: Number(userPdfSettings?.Cell.cellTextSize) || 10,
        cellTextColor: userPdfSettings?.Cell.cellTextColor,
        cellPaddingBottom: Number(userPdfSettings?.Cell.cellPaddingBottom) || 0,
    };
    
    
    
    const pdfSettings = {
        ...tableSettings,
        ...subHeadingSetting,
        ...headerSettings,
        ...cellSettings,
    };

    await drawTable(pdfSettings);
  
    const pdfBytes = await pdfDoc.save()
  
    const bytes  = new Uint8Array( pdfBytes ); 
    const blob   = new Blob( [ bytes ], { type: "application/pdf" } );
    const docUrl = await URL.createObjectURL(blob)

    const stateSettings = {
        Table: tableSettings,
        Header: headerSettings,
        Subheader: subHeadingSetting,
        Cell: cellSettings,
      };
  
    !userPdfSettings && setUserPdfSettings(stateSettings);
    setPdfUrl(docUrl);

    return pdfSettings
};