'use client';

import { useState } from 'react';
import { StandardField, MultiSelect } from "./";
import { fieldDefs } from '../lib/formDefs';

export function FormFieldsLayout({userPdfSettings, setUserPdfSettings}) {
  const [openSections, setopenSection] = useState(false);

  const handelAccordianClick = (e, section) => {
    setopenSection((prevState) => {
      if(prevState === section) return false;
      return section;
    });
  };

  return (
    <>
      {
        Object.keys(userPdfSettings).map((section) => {
          return (
            <form key={section} className="collapse collapse-arrow bg-base-300 mb-2">
              <input 
                type="radio"
                // ref={e => accodianRef.current[section] = {element: e, open: false} } 
                onClick={(e) => handelAccordianClick(e, section)} 
                onChange={() => ''}
                name="my-accordion-2" 
                className="w-full"
                checked={openSections === section ? true : false}
              /> 
              <div className="collapse-title text-xl font-medium text-primary">
                {section}
              </div>
              <div className="collapse-content text-gray-500"> 
                <FormInputs 
                  userPdfSettings={userPdfSettings}
                  setUserPdfSettings={setUserPdfSettings}
                  section={section}
                />
              </div>
            </form>
          )
        })
      }
    </>
  )
};


export function FormInputs({userPdfSettings, setUserPdfSettings, section}) {
  return (
    <>
      {
        userPdfSettings[section] && Object.keys(userPdfSettings[section]).map((key) => fieldDefs[key] && (
          <div key={key} className="relative mt-3">
            {
              fieldDefs[key].options ? 
              <MultiSelect
                field={key}
                fieldDef={fieldDefs[key]}
                userPdfSettings ={userPdfSettings}
                setUserPdfSettings ={setUserPdfSettings}
                section={section}
              />
              :
              <StandardField
                field={key}
                fieldDef={fieldDefs[key]}
                userPdfSettings ={userPdfSettings}
                setUserPdfSettings ={setUserPdfSettings}
                section={section}
              />
            }
          </div>
        ))
      }
    </>
  )
};
