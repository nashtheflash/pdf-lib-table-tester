import { useState } from "react";

import { ToggleTheme, CopyConfigButton, FormFieldsLayout } from "../";

import { ChevronRightIcon, DocumentDuplicateIcon } from "@heroicons/react/20/solid";

export function About({ isPro, setIsPro, userPdfSettings}) {
    return (
        <>
        <div className="">
            {/* <ProArrow/> */}
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <HowTo 
                        isPro={isPro} 
                        setIsPro={setIsPro}
                        userPdfSettings={userPdfSettings}
                    />
                </div>
                <div className="col-span-1">
                    <MoreAbout/>
                </div>
            </div>
        </div>
        </>
    )
}

function HowTo({ isPro, setIsPro, userPdfSettings }) {
    const [sectionOpen, setSectionOpen] = useState(false);
    const [coppied, setCoppied] = useState(false);

    // const handelAccordianClick = (e, section) => {
    //     setSectionOpen(!sectionOpen);
    // };

    return (
        <>
            <div className="flex flex-col w-full text-primary text-lg justify-center items-center">
                <h2 className="">Usage</h2>
                
                <div className="flex gap-3 w-full pb-4 justify-center items-center">
                    <div className="basis-3/6">
                        <div className="flex justify-center">
                            <ToggleTheme
                                isPro={isPro}
                                setIsPro={setIsPro}
                                themeController={false}
                            />
                        </div>
                    </div>
                    <h5 className="basis-3/6 text-xs">Use the toggle to switch between viewing the standard and pro features.</h5>
                </div>
                
                <div className="flex gap-3 w-full pb-4 justify-center items-center">
                    <div className="basis-3/6">
                        <div className="flex justify-center">
                            <CopyConfigButton
                                isPro={isPro}
                                userPdfSettings={userPdfSettings}
                            />
                        </div>
                    </div>
                    <h5 className="basis-3/6 text-xs">Click the clipboard icon to copy the current configuration for pasting into your project.</h5>
                </div>
                
                <div className="flex gap-3 w-full pb-4 justify-center items-center">
                    <div className="basis-3/6">
                        <div className="flex flex-c justify-end">
                            <form className="collapse collapse-arrow bg-base-100 mb-2">
                                <input 
                                    type="radio"
                                    onClick={() => setSectionOpen(!sectionOpen)} 
                                    onChange={() => ''}
                                    name="my-accordion-2" 
                                    className="w-full"
                                    checked={sectionOpen ? true : false}
                                /> 
                                <div className="collapse-title text-xl font-medium text-primary">
                                    Table
                                </div>
                            </form>
                        </div>
                    </div>
                    <h5 className="basis-3/6 text-xs">Utilize the tabs on the left to adjust the table settings. Changes will be immediately reflected in the window.</h5>
                </div>

                <div className="flex gap-3 w-full pb-4 justify-center items-center">
                    <div className="basis-3/6">
                        <button 
                            className="btn bg-base-100 w-full" 
                            onClick={() => {navigator.clipboard.writeText('npm i pdf-lib-table'); setCoppied(true)}}
                            onMouseLeave={
                                //allows animation to finish
                                () => setTimeout(() => {
                                    setCoppied(false)
                                }, "1000")
                            }
                            >
                            <ChevronRightIcon className="h-4 w-4"/>
                                {coppied ? 'Coppied!!' : 'npm i pdf-lib-table'}
                            <DocumentDuplicateIcon className="h-4 w-4"/>
                        </button>
                    </div>
                    <h5 className="basis-3/6 text-xs">Copy the command to the right to install</h5>
                </div>
            </div>
        </>
    )
};


function MoreAbout() {
    return (
        <>
            <div className="flex w-full text-primary text-lg justify-center items-center">
                <h2 className="">About the Project</h2>
            </div>
        </>
    )
};