//import { useState } from 'react';

import { PDFDocument, StandardFonts, degrees, rgb } from 'pdf-lib';
import { drawTable } from 'pdf-lib-table';
import { columnDefs } from '../definition';
import { subHeadingDefs } from '../definition';
import { tableData } from '../data';

export async function createPdf({ userPdfSettings, setUserPdfSettings, setPdfUrl }) {

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612.0, 792.0]);
    
    //add fonts to the doc
    const [
        Courier,
        CourierBold,
        CourierBoldOblique,
        CourierOblique,
        Helvetica,
        HelveticaBold,
        HelveticaBoldOblique,
        HelveticaOblique,
        TimesRoman,
        TimesRomanBold,
        TimesRomanBoldItalic,
        TimesRomanItalic,
    ] = await Promise.all([
        pdfDoc.embedFont(StandardFonts.Courier),
        pdfDoc.embedFont(StandardFonts.CourierBold),
        pdfDoc.embedFont(StandardFonts.CourierBoldOblique),
        pdfDoc.embedFont(StandardFonts.CourierOblique),
        pdfDoc.embedFont(StandardFonts.Helvetica),
        pdfDoc.embedFont(StandardFonts.HelveticaBold),
        pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique),
        pdfDoc.embedFont(StandardFonts.HelveticaOblique),
        pdfDoc.embedFont(StandardFonts.TimesRoman),
        pdfDoc.embedFont(StandardFonts.TimesRomanBold),
        pdfDoc.embedFont(StandardFonts.TimesRomanBoldItalic),
        pdfDoc.embedFont(StandardFonts.TimesRomanItalic),
    ])

    const fontLookup = {
        Courier,
        CourierBold,
        CourierBoldOblique,
        CourierOblique,
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
        data: tableData, //Required
        page, //Required
        pdfDoc, //Required
        columns: columnDefs,
        startingX: Number(userPdfSettings?.startingX) || 0,
        startingY: Number(userPdfSettings?.startingY) || page.getHeight(),
        maxTableWidth: Number(userPdfSettings?.maxTableWidth) || 550,
        tableBoarder: userPdfSettings?.tableBoarder, 
        tableBoarderThickness: Number(userPdfSettings?.tableBoarderThickness) || 1, 
        tableBoarderColor:  userPdfSettings?.tableBoarderColor || rgb(.56, .56, .56),
        alternateRowColor: userPdfSettings?.alternateRowColor, //TODO: add this
        alternateCellColor: userPdfSettings?.alternateCellColor, //TODO: add this
    };

    //HEADER SETTINGS
    const headerSettings = {
        //Header
        headerHeight: Number(userPdfSettings?.headerHeight) || 0,
        headerBackgroundColor: userPdfSettings?.headerBackgroundColor,

        headerFont: fontLookup[userPdfSettings?.headerFont] || fontLookup.Courier,
        headerTextSize: Number(userPdfSettings?.headerTextSize) || 10,
        headerTextAlignment: userPdfSettings?.headerTextAlignment || 'center',
        headerTextColor: userPdfSettings?.headerTextColor,
        
        headerDividedY: userPdfSettings?.headerDividedY,
        headerDividedYColor: userPdfSettings?.headerDividedYColor || rgb(.03, .03, .03),
        headerDividedYThickness: Number(userPdfSettings?.headerDividedYThickness) || 0,
    
        headerDividedX: userPdfSettings?.headerDividedX,
        headerDividedXColor: userPdfSettings?.headerDividedXColor,
        headerDividedXThickness: Number(userPdfSettings?.headerDividedXThickness) || 1,
        
        headerWrapText: !userPdfSettings || userPdfSettings?.headerWrapText == true ? true : false,
    };

    //SUBHEADING SETTINGS
    const subHeadingSetting = {
        subHeadings: subHeadingDefs,
    };

    //CELL SETTINGS
    const cellSettings = {
        cellHeight: Number(userPdfSettings?.cellHeight) || undefined,
        cellBackgroundColor: userPdfSettings?.cellBackgroundColor,
        cellFont: fontLookup[userPdfSettings?.cellFont] || fontLookup.Courier, //Required
        cellTextSize: Number(userPdfSettings?.cellTextSize) || 10,
        cellTextColor: userPdfSettings?.cellTextColor,
        cellPaddingBottom: Number(userPdfSettings?.cellTextSize) || 0,
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
  
    !userPdfSettings && setUserPdfSettings(pdfSettings);
    setPdfUrl(docUrl);
};