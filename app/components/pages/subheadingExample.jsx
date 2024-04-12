import { Doc, Subheading } from "@/app/function"
import { TableIframe } from "../tableIframe"
import { useEffect } from "react";

export function SubheadingExample({ userPdfSettings, setUserPdfSettings, pdfUrl, setPdfUrl }) {

    useEffect(() => {
        const document = new Doc();
        document.type = new Subheading();
        document.draw({ userPdfSettings, setUserPdfSettings, setPdfUrl });
    }, [])

    return (
        <TableIframe url={pdfUrl}/>
    )
}