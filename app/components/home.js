'use client';

import { useState, useEffect } from "react";
import { FormFieldsLayout, CopyCode, NavBar, TableIframe} from ".";
import { About, Pro, SinglePageExample, MultiPageExample, SubheadingExample } from "./pages";

import { createPdf, Doc, SinglePage, MultiPage, Subheading, Horizontal } from "../function";

import { pdfSettings } from '../lib/defaultTableSettings'



const pages = [
    {name: 'Single Page', current: true},
    {name: 'Multi Page', current: false},
    {name: 'Horizontal', current: false},
    {name: 'Subheadings', current: false},
    {name: 'Invoice', current: false},
    {name: 'About', current: false},
    {name: 'Pro', current: false},
];



export function HomeLayout({  }) {
    const [nav, setNav] = useState(pages);
    const [isPro, setIsPro] = useState(true);
    const [userPdfSettings, setUserPdfSettings] = useState(pdfSettings);
    const [pdfUrl, setPdfUrl] = useState();

    useEffect(() => {
        const document = new Doc();

        if(nav[0].current) document.type = new SinglePage();
        if(nav[1].current) document.type = new MultiPage();
        if(nav[2].current) document.type = new Horizontal();
        if(nav[3].current) document.type = new Subheading();

        document.draw({ userPdfSettings, setUserPdfSettings, setPdfUrl });

    }, [userPdfSettings, nav]);

    useEffect(() => { //TODO: move to server?

        const document = new Doc();
        document.type = new SinglePage();
        document.draw({ userPdfSettings, setUserPdfSettings, setPdfUrl });

    }, []);

    return (
        <div className='bg-base-200'>
        <div className='grid grid-cols-4 h-screen justify-center'>
        <div className='col-span-1 h-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primary scrollbar-track-slate-300 scrollbar-w-2 overflow-y-auto overflow-x-hidden'>
        <div className='sticky top-0 px-2 pt-5'>
        <h1 className="text-primary">PDF-LIB-TABLE</h1>
        <div className="flex flex-col w-full">
        <div className="divider divider-primary mt-0"></div>
        </div>
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
        <div className="h-16">
        <NavBar
        nav={nav}
        setNav={setNav}
        />
        </div>
        <div className="w-full px-2 pb-3 h-[calc(100vh-64px)]">
        { 
            !pdfUrl ? <div className="skeleton w-full h-full"></div> :
            nav[0].current ? <SinglePageExample userPdfSettings={userPdfSettings} setUserPdfSettings={setUserPdfSettings} pdfUrl={pdfUrl} setPdfUrl={setPdfUrl}/> :
            nav[1].current ? <MultiPageExample userPdfSettings={userPdfSettings} setUserPdfSettings={setUserPdfSettings} pdfUrl={pdfUrl} setPdfUrl={setPdfUrl}/> :
            nav[3].current ? <SubheadingExample userPdfSettings={userPdfSettings} setUserPdfSettings={setUserPdfSettings} pdfUrl={pdfUrl} setPdfUrl={setPdfUrl}/> :
            nav[5].current ? <About isPro={isPro} setIsPro={setIsPro} userPdfSettings={userPdfSettings}/> :
            nav[6].current ? <Pro/> :
            <TableIframe url={pdfUrl}/>
        }
        </div> 
        </div>
        </div>
        </div>
    );
};
