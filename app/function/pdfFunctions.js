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
    
    const pdfSettings = {
        data: tableData, //Required
        page, //Required
        pdfDoc, //Required
        columns: columnDefs,
        startingX: Number(userPdfSettings?.startingX) || 0,
        startingY: Number(userPdfSettings?.startingY) || page.getHeight(),
        maxTableWidth: Number(userPdfSettings?.maxTableWidth) || 550,
        subHeadings: subHeadingDefs,
        headerFont: fontLookup[userPdfSettings?.headerFont] || fontLookup.Courier, //Required
        cellFont: fontLookup[userPdfSettings?.headerFont] || fontLookup.Courier, //Required
        headerTextAlignment: userPdfSettings?.headerTextAlignment || 'center',
        tableBoarder: userPdfSettings?.tableBoarder, 
        tableBoarderThickness: Number(userPdfSettings?.tableBoarderThickness) || 1, 
        tableBoarderColor:  userPdfSettings?.headerTextColor || rgb(.56, .56, .56),
        //Header
        headerTextColor: userPdfSettings?.headerTextColor,
        headerBackgroundColor:  userPdfSettings?.headerBackgroundColor,
        headerDividedYColor: userPdfSettings?.headerDividedYColor || rgb(.03, .03, .03),
        headerDividedYThickness: userPdfSettings?.headerDividedYThickness || 0,
        headerDividedY: userPdfSettings?.headerDividedY,
        headerWrapText: !userPdfSettings || userPdfSettings?.headerWrapText == true ? true : false,
    };
    
    await drawTable(pdfSettings);
  
    const pdfBytes = await pdfDoc.save()
  
    const bytes  = new Uint8Array( pdfBytes ); 
    const blob   = new Blob( [ bytes ], { type: "application/pdf" } );
    const docUrl = await URL.createObjectURL(blob)
  
    !userPdfSettings && setUserPdfSettings(pdfSettings);
    setPdfUrl(docUrl);
};