import { Doc } from "../../function/examples/drawDoc"
import { MultiPage } from "../../function/examples/multiPageTable"
import { TableIframe } from "../tableIframe"
import { useEffect } from "react";

export function MultiPageExample({ userPdfSettings, setUserPdfSettings, pdfUrl, setPdfUrl }) {

    useEffect(() => {
        const document = new Doc();
        document.type = new MultiPage();
        document.draw({ userPdfSettings, setUserPdfSettings, setPdfUrl });
    }, [])

    return (
        <TableIframe url={pdfUrl}/>
    )
}