'use client';

import { useState, useEffect } from "react";
import { FormFieldsLayout, CopyCode, TableIframe, ExampleBar} from ".";
import {  SinglePageExample, MultiPageExample, SubheadingExample } from "./pages";

import { Doc, SinglePage, MultiPage, Subheading } from "../function";

import { pdfSettings } from '../lib/defaultTableSettings'

const examples = [
    {name: 'Single Page', current: true},
    {name: 'Multi Page', current: false},
    {name: 'Subheadings', current: false},
    // {name: 'Invoice', current: false},
];

export function ExampleLayout({  }) {
    const [currentExample, setCurrentExample] = useState(examples);
    const [isStandard, setIsStandard] = useState(false);
    const [userPdfSettings, setUserPdfSettings] = useState(pdfSettings);
    const [pdfUrl, setPdfUrl] = useState();

    useEffect(() => {
        const document = new Doc();

        if(currentExample[0].current) document.type = new SinglePage();
        if(currentExample[1].current) document.type = new MultiPage();
        if(currentExample[2].current) document.type = new Subheading();

        document.draw({ userPdfSettings, setUserPdfSettings, setPdfUrl });

    }, [userPdfSettings, currentExample]);

    useEffect(() => { //TODO: move to server?

        const document = new Doc();
        document.type = new SinglePage();
        document.draw({ userPdfSettings, setUserPdfSettings, setPdfUrl });

    }, []);

    return (
        <div className='bg-base-100'>
            <div className='grid grid-cols-4 h-[calc(100vh-64px)] justify-center'>
                <div className='col-span-1 h-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primary scrollbar-track-slate-300 scrollbar-w-2 overflow-y-auto overflow-x-hidden'>
                    <div className='sticky top-0 px-2 pt-5'>
                        <CopyCode
                            isStandard={isStandard}
                            setIsStandard={setIsStandard}
                            userPdfSettings={userPdfSettings}
                        />
                        <FormFieldsLayout
                            userPdfSettings={userPdfSettings}
                            setUserPdfSettings={setUserPdfSettings}
                            examples={currentExample}
                            setCurrentExample={setCurrentExample}
                        />
                    </div>
                </div>
                <div className='col-span-3 h-full overflow-y-hidden'>
                    <div className="w-full px-2 py-3 h-[calc(100vh-64px)]">
                        { 
                            !pdfUrl ? <div className="skeleton w-full h-full"></div> :
                                currentExample[0].current ? <SinglePageExample userPdfSettings={userPdfSettings} setUserPdfSettings={setUserPdfSettings} pdfUrl={pdfUrl} setPdfUrl={setPdfUrl}/> :
                                    currentExample[1].current ? <MultiPageExample userPdfSettings={userPdfSettings} setUserPdfSettings={setUserPdfSettings} pdfUrl={pdfUrl} setPdfUrl={setPdfUrl}/> :
                                        currentExample[2].current ? <SubheadingExample userPdfSettings={userPdfSettings} setUserPdfSettings={setUserPdfSettings} pdfUrl={pdfUrl} setPdfUrl={setPdfUrl}/> :
                                            <TableIframe url={pdfUrl}/>
                        }
                    </div> 
                </div>
            </div>
        </div>
    );
};
