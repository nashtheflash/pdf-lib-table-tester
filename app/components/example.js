'use client';

import { useState, useEffect } from "react";
import { FormFieldsLayout, CopyCode, NavBar, TableIframe, ExampleBar} from ".";
import {  SinglePageExample, MultiPageExample, SubheadingExample } from "./pages";

import { createPdf, Doc, SinglePage, MultiPage, Subheading, Horizontal } from "../function";

import { pdfSettings } from '../lib/defaultTableSettings'

const examples = [
    {name: 'Single Page', current: true},
    {name: 'Multi Page', current: false},
    {name: 'Subheadings', current: false},
    // {name: 'Invoice', current: false},
];

export function ExampleLayout({  }) {
    // const [nav, setNav] = useState(pages);
    const [currentExample, setCurrentExample] = useState(examples);
    const [isPro, setIsPro] = useState(false);
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
            <div className='grid grid-cols-4 h-screen justify-center'>
                <div className='col-span-1 h-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primary scrollbar-track-slate-300 scrollbar-w-2 overflow-y-auto overflow-x-hidden'>
                    <div className='sticky top-0 px-2 pt-5'>
                        <CopyCode
                            isPro={isPro}
                            setIsPro={setIsPro}
                            userPdfSettings={userPdfSettings}
                        />
                        <FormFieldsLayout
                            userPdfSettings={userPdfSettings}
                            setUserPdfSettings={setUserPdfSettings}
                        />
                    </div>
                </div>
                <div className='col-span-3 h-full overflow-y-hidden'>
                    <div className="h-12 flex justify-start items-center">
                        <ExampleBar
                            examples={currentExample}
                            setCurrentExample={setCurrentExample}
                        />
                    </div>
                    <div className="w-full px-2 pb-3 h-[calc(100vh-64px)]">
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
