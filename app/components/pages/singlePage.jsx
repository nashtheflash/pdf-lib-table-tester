import { Doc, SinglePage } from "@/app/function"
import { TableIframe } from "../tableIframe"
import { useEffect } from "react";

export function SinglePageExample({ userPdfSettings, setUserPdfSettings, pdfUrl, setPdfUrl }) {

    useEffect(() => {
        const document = new Doc();
        document.type = new SinglePage();
        document.draw({ userPdfSettings, setUserPdfSettings, setPdfUrl });
    }, [])

    return (
        <TableIframe url={pdfUrl}/>
    )
}