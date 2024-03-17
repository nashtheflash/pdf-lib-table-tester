'use client';

import { useState, useEffect } from "react";
import { FormFieldsLayout } from "./formFieldsLayout";

import { createPdf } from "../function";

export function HomeLayout() {
    const [userPdfSettings, setUserPdfSettings] = useState();
    const [pdfUrl, setPdfUrl] = useState();
    
    
    useEffect(() => {
        
        createPdf({ userPdfSettings, setUserPdfSettings, setPdfUrl })
        
    }, [userPdfSettings])
    
    useEffect(() => {
        createPdf({ userPdfSettings, setUserPdfSettings, setPdfUrl })
    
    }, [])

    return (
      <div className='bg-white'>
        <div className='grid grid-cols-4'>
          <div className='col-span-1'>
            <div className='sticky top-0 px-4'>
              <h1 className='text-black mb-3'>Settings</h1>
              <FormFieldsLayout
                userPdfSettings={userPdfSettings}
                setUserPdfSettings={setUserPdfSettings}
              />
            </div>
          </div>
          
          <div className='col-span-3'>
            { !pdfUrl ? 'Loading...' :
              <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="100%"
              height="1200"
              src={pdfUrl}
              >
            </iframe>
            }
          </div>
        </div>
      </div>
    );
  };