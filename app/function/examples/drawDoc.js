import { PDFDocument, StandardFonts, rgb} from 'pdf-lib';
import { createPDFTables } from 'pdf-lib-table';
// import { columnDefs } from '../../definition';
import { subheadingColumnDefs } from '../../definition';

export class Doc {
    constructor(example) {
        this._example = example;
    }

    set type(type){
        this._example = type;
    }
    
    get type(){
        return this._example;
    }

    data() {
        return this._example.data;
    }
    
    async draw({ userPdfSettings, setUserPdfSettings, setPdfUrl}){
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([792.0, 612.0]);
        const data = await this._example.data;

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
            pdfDoc.embedFont(StandardFonts.Courier),              //TODO: Remove not suported
            pdfDoc.embedFont(StandardFonts.CourierBold),          //TODO: Remove not suported
            pdfDoc.embedFont(StandardFonts.CourierBoldOblique),   //TODO: Remove not suported
            pdfDoc.embedFont(StandardFonts.CourierOblique),       //TODO: Remove not suported
            pdfDoc.embedStandardFont(StandardFonts.Helvetica),              //Supported
            pdfDoc.embedStandardFont(StandardFonts.HelveticaBold),          //Supported
            pdfDoc.embedStandardFont(StandardFonts.HelveticaBoldOblique),   //Supported
            pdfDoc.embedStandardFont(StandardFonts.HelveticaOblique),       //Supported
            pdfDoc.embedStandardFont(StandardFonts.TimesRoman),             //Supported
            pdfDoc.embedStandardFont(StandardFonts.TimesRomanBold),         //Supported
            pdfDoc.embedStandardFont(StandardFonts.TimesRomanBoldItalic),   //Supported
            pdfDoc.embedStandardFont(StandardFonts.TimesRomanItalic),       //Supported
        ])

        //TABLE SETTINGS
        const pdfSettings = this._example.tableSettings({ 
            data, 
            columns: this._example.columnDefs, 
            page, 
            pdfDoc,
            primaryFont: TimesRomanBold,
            secondaryFont: TimesRoman,
        });
    
        const newDataFormat = data.map((data) => {
            if(data.subheading) return {type: 'subheading', data: {...data.subheading}}
            return {type: 'row', data: {...data}}
        });

        const tables = await createPDFTables(
            newDataFormat, // Required - No Default - data t be printed
            page, // Required - No Default - page provided by pdf-lib
            pdfDoc, // Required - No Default - pdfDoc that the table will be printed on
            this._example.columnDefs, // Required - No Default - column definitions
            StandardFonts, // fonts
            rgb, // colors
            {...pdfSettings}
        );

        tables.drawVerticalTables();


        const pdfBytes = await pdfDoc.save()
        
        const bytes  = new Uint8Array( pdfBytes ); 
        const blob   = new Blob( [ bytes ], { type: "application/pdf" } );
        const docUrl = await URL.createObjectURL(blob)
        
        // setUserPdfSettings(pdfSettings);
        setPdfUrl(docUrl);
    
        return pdfSettings
    }

    build() {
        return this;
    }
};
